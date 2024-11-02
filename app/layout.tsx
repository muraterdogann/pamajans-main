// app/layout.tsx
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
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Set default metadata for the whole app
export const metadata = {
  title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description:
    "Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index,follow",
  openGraph: {
    title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description:
      "Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz.",
    url: "https://pamajans.com/",
    type: "website",
    images: [
      {
        url: "/images/pam-ajans-logo-siyah.svg",
        alt: "Pam Ajans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description:
      "Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz.",
    images: ["/images/pam-ajans-logo-siyah.svg"],
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="tr" className={poppins.className}>
      <head>
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W95HF9J');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body suppressHydrationWarning={true}>
        <Header04 />
        <main>{children}</main>
        <Footer />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W95HF9J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
