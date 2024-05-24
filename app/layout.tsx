
import Footer from "@/component/layouts/footer";
import Header04 from "@/component/layouts/header";
import { ReactNode } from "react";
import Script from "next/script";
import "./globals.css"
interface LayoutProps {
  children: ReactNode;
}

export const revalidate = 86400
export default function Layout({ children }: LayoutProps) {
  const header = <Header04 />;

  return (
    <html lang="tr">
      <head>
      <title>Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title> 
      <link rel="icon" href="/images/pam-ajans-logo-siyah.svg"/>
      <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="index,follow"/>
  
      <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
      <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
      <meta property="og:url" content="https://pamajans.com/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg"/>
      <meta property="og:image:alt" content="Pam Ajans"/>
  
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
      <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
      <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg"/>

     {/*  Google analytics */}

      <Script id="google-analytics" strategy="afterInteractive" async dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W95HF9J');
          `}}
        />

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body suppressHydrationWarning={true}>
      {header}
      <main>{children}</main>
      <Footer />
      <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-W95HF9J"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>

      </body>
    </html>
  );
}
