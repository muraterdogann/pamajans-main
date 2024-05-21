import React from "react";
import ref from "@/public/data/referans_data.json"
import Image from "next/image";
import Headline from "@/component/wallet-btn/headLine";
import { Viewport } from "next";

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  title: "Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
  charSet: "utf-8",
  viewport: viewport,
  robots: "index,follow",
  openGraph: {
    title: "Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    url: "https://pamajans.com/referanslar",
    type: "website",
    image: "/public/images/pam-ajans-logo-siyah.svg",
    imageAlt: "Pam Ajans Referanslar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    image: "/public/images/pam-ajans-logo-siyah.svg"
  },
};

const Index = () => {
  const list = [];

  for (let i = 0; i < ref.length; i++) {
    const srcf = ref[i].url;
    const srcn = ref[i].name;
    // list.push(<div className="col-ref-custom" key={i}><Image className="referanslar-resimler" width={465} height={120} quality={100} src={srcf} key={srcf} alt={srcn} /></div>);
    if(i===3)
      {
        list.push(<div className="col-ref-custom mx-auto my-auto lg:w-[230px] w-[90px] " key={i}><Image className="referanslar-resimler" quality={100} width={230} height={80} src={srcf} key={srcf} alt={srcn}/></div>);
      }else{
    list.push(<div className="col-ref-custom" key={i}><Image className="referanslar-resimler" quality={100} width={465} height={120} src={srcf} key={srcf} alt={srcn}/></div>);
  }}
  return (
    <>
      <section className="relative lg:pb-48 pb-24 w-full">
        <Headline
          text="Referanslarımız"
          classes="font-display text-jacarta-300 text-white bg-main rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] pt-32 pb-8 mb-12 text-center text-5xl dark:text-white"
        />
        <div className="grid mt-8 lg:grid-cols-5 grid-cols-3 lg:ml-8 ">
          {list}
        </div>
      </section>
    </>
  );
};

export default Index;
