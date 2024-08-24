
import React from "react";
import Team from "@/component/about/team";
import Head from "next/head";


const Index = () => {
  
  return (
    <>
      <Head>
  <title>Ekibimiz | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
  <meta name="description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin."/>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="index,follow"/>
  

  <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta property="og:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin."/>
  <meta property="og:url" content="https://pamajans.com/ekibimiz"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg"/>
  <meta property="og:image:alt" content="Pam Ajans Ekibimiz"/>
  

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Ekibimiz | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta name="twitter:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin."/>
  <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg"/>
  

  <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" type="image/svg+xml"/>
  </Head>
      <div className="font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
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
