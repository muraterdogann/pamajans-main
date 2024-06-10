import { generateMailOptions } from '@/component/services/switch-case';
import { NextResponse, NextRequest } from 'next/server';
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
        const userEmail = formData.get('email');

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            ...mailOptions,
        });
        const mailToUser = await transporter.sendMail({
            from: username,
            to: userEmail!.toString(), // Convert userEmail to string
            subject: "Başvurunuz için teşekkür ederiz",
            html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<div style="width:100%;max-width:800px;margin:0 auto;padding:20px;text-align:center;font-family:Arial, sans-serif;background-color:#f0f8ff">
  <header style="background-color:#0a101d;padding:20px;color:white;border-radius:10px"><img src="https://i.hizliresim.com/ldanf6d.png" alt="Pam Ajans Logo" style="display:block;margin:0 auto" />
    <h1>Bizimle iletişime geçtiğiniz için teşekkür ederiz.</h1>
    <p>Uzman ekiplerimiz en kısa sürede sizlerle iletişime geçecektir. Beklemek istemiyorsanız bizleri hafta içi: 09:00 - 18:00 saatleri arasında<!-- --> <a href="tel:08503057726">0850 305 77 26</a>&#x27;dan arayabilir bilgi alabilirsiniz.</p><a href="tel:08503057726" style="background-color:#37c8ae;color:white;padding:10px 20px;border:none;border-radius:5px;text-decoration:none;display:inline-block;margin-top:20px">Telefon ile ara</a>
  </header>
  <section style="margin:40px 0">
    <h2>Neden Pam Ajans?</h2>
    <div style="display:inline-block;width:30%;vertical-align:top"><img src="https://i.hizliresim.com/jut4w1m.png" alt="Uzman Ekip" style="width:50px;height:50px" />
      <h3>Uzman Ekip</h3>
      <p>Alanında uzman ekiplerimiz ile hizmetinizdeyiz.</p>
    </div>
    <div style="display:inline-block;width:30%;vertical-align:top"><img src="https://i.hizliresim.com/he2p7d7.png" alt="Deneyim" style="width:50px;height:50px" />
      <h3>Deneyim</h3>
      <p>6 yılı aşkın süredir deneyim kazanıyor kendimizi geliştiriyoruz.</p>
    </div>
    <div style="display:inline-block;width:30%;vertical-align:top"><img src="https://i.hizliresim.com/8bemvhk.png" alt="Kanıtlanmış Başarı" style="width:50px;height:50px" />
      <h3>Kanıtlanmış Başarı</h3>
      <p>Çalıştığımız markalar ile büyük başarılara imza attık.</p>
    </div>
  </section>
  <section style="background-color:#0a101d;border-radius:10px;padding:20px;margin-top:40px;color:white">
    <h2>E-ticaret paketlerinde Pam Ajans fırsatı!</h2>
    <p>E-ticaret siteni Pam Ajans ile aç, hediyeleri kap!</p>
    <div style="justify-content:center;margin-top:20px"><a href="https://www.ticimax.com/demo?utm_campaign=cpc-dene+uzanti&amp;utm_content=cpc-dene+uzanti&amp;utm_medium=cpc-dene+uzanti&amp;utm_source=Google-cpc&amp;utm_term=cpc-dene+uzanti?adgroup_id=&amp;adgroup_name=ah_pmax_account_goal&amp;campaign_id=19430003696&amp;matchtype=&amp;search_kw=&amp;utm_campaign=cpc-dene+uzanti&amp;utm_campaign_name=ah_pmax_account_goal&amp;utm_content=cpc-dene+uzanti&amp;utm_medium=cpc-dene+uzanti&amp;utm_source=Google-cpc&amp;utm_term=cpc-dene+uzanti&amp;wbraid=ClgKCQjwpZWzBhC6ARJHAC5IwIng2xSkarK75N_2Z-opAwxOVGOtXG6HtqdJU41m2Xhu34fJoZSCrvmCNoPfHHjqjxTQsTgif-ld7qzKRT02iWmH35kaAltW?r=NQWUG85NE276" target="_blank" style="background-color:#37c8ae;color:white;padding:10px 20px;border:none;border-radius:5px;margin-left:5px;margin-right:5px;text-decoration:none">Ticimax&#x27;a Başvur</a><a href="https://www.ideasoft.com.tr/?sc=21063271" target="_blank" style="background-color:#37c8ae;color:white;padding:10px 20px;border:none;border-radius:5px;margin-left:5px;margin-right:5px;text-decoration:none">İdeasoft&#x27;a Başvur</a></div>
  </section>
  <footer style="background-color:#0a101d;border-radius:10px;color:white;padding:20px;margin-top:40px;text-align:left;display:flex">
    <section style="margin-bottom:20px">
      <h2>Neden Biz?</h2>
      <p>2016&#x27;dan bugüne edindiğimiz yurt içi ve yurt dışı tecrübelerimiz ile markaların tüm ihtiyaçlarını karşılıyoruz. Sizler için dijital dünyanın zor yollarında güçlü bir yolculuk yapıyoruz.</p>
      <p>0850 305 77 26</p><img src="https://i.hizliresim.com/ldanf6d.png" alt="Pam Ajans Logo" style="display:block;margin:10px 0" />
    </section>
    <section style="margin-bottom:20px">
      <h3>Sosyal Medya</h3>
      <p>Sosyal medyada bizi takip edin.</p>
      <div style="display:flex;gap:5px;justify-content:start;margin-top:5px"><a href="https://www.instagram.com/pamajans/" style="color:#067df7;text-decoration:none" target="_blank"><img alt="Plaid" height="20" src="https://i.hizliresim.com/gqkbcum.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="20" /></a><a href="https://www.facebook.com/pamajans" style="color:#067df7;text-decoration:none" target="_blank"><img alt="Plaid" height="20" src="https://i.hizliresim.com/dax6fh6.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="20" /></a><a href="https://tr.linkedin.com/company/pam-dijital-reklam-ajans%C4%B1" style="color:#067df7;text-decoration:none" target="_blank"><img alt="Plaid" height="20" src="https://i.hizliresim.com/8794e3z.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="30" /></a></div>
    </section>
    <section style="margin-bottom:20px">
      <h3>Adresimiz</h3>
      <p>Kızılmark Mahallesi 1443.Cadde 25 C Blok No: 97 Çankaya/Ankara</p>
    </section>
  </footer>
</div>
            `
        });

        return NextResponse.json({ message: "Email gönderildi" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Mesaj Gönderilemedi" });
    }
}
