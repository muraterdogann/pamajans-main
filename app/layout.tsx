
import Footer from "@/component/layouts/footer";
import Header04 from "@/component/layouts/header";
import { ReactNode } from "react";
import Script from "next/script";
import "./globals.css"
import { Viewport } from "next";

interface LayoutProps {
  children: ReactNode;
}
export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
  charSet: "utf-8",
  viewport: viewport,
  robots: "index,follow",
  openGraph: {
    title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    url: "https://pamajans.com",
    type: "website",
    image: "/public/images/pam-ajans-logo-siyah.svg",
    imageAlt: "Pam Ajans Başarı "
  },
  twitter: {
    card: "summary_large_image",
    title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    image: "/public/images/pam-ajans-logo-siyah.svg"
  },


  
};



export default function Layout({ children }: LayoutProps) {
  const header = <Header04 />;

  return (
    <html lang="tr">
      <head>
     
      <Script id="google-analytics" strategy="afterInteractive" async dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W95HF9J');
          `}}
        />
      </head>
      <body>
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
