import { NextResponse, NextRequest } from 'next/server';
import { generateMailOptions } from '@/component/services/switch-case';
import { rateLimit } from '@/app/api/ratelimit/rateLimit';
import { createTransporter } from '@/component/services/transporter';
import { Transporter } from 'nodemailer';

const myEmail = process.env.MY_EMAIL;
const username = process.env.EMAIL_USERNAME;
let transporter: Transporter;

async function effectiveTransporter() {
    transporter = await createTransporter(); 
}

effectiveTransporter();

export async function POST(request: NextRequest) {
    try {
        // Rate limiting kontrolü
        const isAllowed = await rateLimit(request);
        if (!isAllowed) {
            return NextResponse.json({ message: "Çok fazla istek gönderdiniz. Lütfen bekleyiniz" }, { status: 429 });
        }

        const formData = await request.formData();
        const mailOptions = generateMailOptions(formData);

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            ...mailOptions,
        });

        return NextResponse.json({ message: "Email gönderildi" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Mesaj Gönderilemedi" });
    }
}
