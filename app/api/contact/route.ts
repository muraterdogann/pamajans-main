import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const myEmail = process.env.MY_EMAIL;

export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        // Rate limiting kontrolü tamamen kaldırıldı

        const response = await axios({
            method: 'POST',
            url: "https://api.brevo.com/v3/contacts",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
            },
            data: body,
        });

        return NextResponse.json({ message: "Email gönderildi" });
    } catch (error: any) {
        console.error('Error in API call:', error.response ? error.response.data : error.message);

        if (error.response && error.response.data && error.response.data.code === 'duplicate_parameter') {
            return NextResponse.json({
                message: "Aynı e-mail ile birden fazla başvuru yapamazsınız. Lütfen info@ex.com'a mail atınız.",
                error: error.response.data
            }, { status: 409 });
        }

        return NextResponse.json({ message: "Mesaj Gönderilemedi", error: error.response ? error.response.data : error.message });
    }
}
