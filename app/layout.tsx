
import Footer from "@/component/layouts/footer";
import Header04 from "@/component/layouts/header";
import { ReactNode } from "react";
import "./globals.css"

interface LayoutProps {
  children: ReactNode;
}





export const metadata = {
  title: 'Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı',
  description: 'Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.',
  icons: {
      icon:'/public/images/pam-ajans-logo-siyah.svg',
  }
}


export default function Layout({ children }: LayoutProps) {
  const header = <Header04 />;

  return (
    <html>
      <body>
      {header}
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
