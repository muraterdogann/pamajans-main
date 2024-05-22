import React from "react";
import ref from "@/public/data/referans_data.json"
import Image from "next/image";
import Headline from "@/component/wallet-btn/headLine";


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
    <head>
  <title>Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
  <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="index,follow"/>
  

  <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta property="og:url" content="https://pamajans.com/referanslar"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg"/>
  <meta property="og:image:alt" content="Pam Ajans Referanslar"/>
  

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg"/>
  

  <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" type="image/svg+xml"/>
  </head>
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
