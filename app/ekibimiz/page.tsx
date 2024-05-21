
import React from "react";
import Team from "@/component/about/team";
import { Viewport } from "next";

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  title: "Ekibimiz | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
  charSet: "utf-8",
  viewport: viewport,
  robots: "index,follow",
  openGraph: {
    title: "Ekibimiz | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    url: "https://pamajans.com/ekibimiz",
    type: "website",
    image: "/public/images/pam-ajans-logo-siyah.svg",
    imageAlt: "Pam Ajans Ekibimiz"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekibimiz | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    image: "/public/images/pam-ajans-logo-siyah.svg"
  },
};
const Index = () => {
  

 

  return (
    <>
     
      <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>Ekibimizle Tanışın</h2>
      </div>
      <section className="relative lg:pt-16 lg:pb-24 pb-24">
        
        <div className="container">
        
          <div className="mb-8 flex flex-wrap items-center justify-between">
           <div >
            <Team>
              
            </Team>
           </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Index;
