import Footer from "@/component/layouts/footer";
import Header04 from "@/component/layouts/header";
import { ReactNode } from "react";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const revalidate = process.env.VERCEL ? 1 : false;

export default function Layout({ children }: LayoutProps) {
  const header = <Header04 />;

  return (
    <html lang="tr" className={poppins.className}>
      <head>
        <title>Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta property="og:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta property="og:url" content="https://pamajans.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg" />
        <meta property="og:image:alt" content="Pam Ajans" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta name="twitter:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg" />
        

        {/* Google analytics */}
        <Script id="google-analytics" strategy="afterInteractive" async dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W95HF9J');
          `}}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
