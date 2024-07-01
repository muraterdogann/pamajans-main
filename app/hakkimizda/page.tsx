import React from "react";
import Story from "@/component/about/story";
import Partners from "@/component/partners/partners";
import Faq from "@/component/faq/faq";
import Head from "next/head";





const About = () => {
  return (
    <>
    <Head>
  <title>Hakkımızda | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
  <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="index,follow"/>
  

  <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta property="og:url" content="https://pamajans.com/hakkimizda"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg"/>
  <meta property="og:image:alt" content="Pam Ajans Hakkımızda"/>
  

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Hakkımızda | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg"/>
  

  <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" type="image/svg+xml"/>
  </Head>

      <div className="absolute w-full font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl ">
        <h2>Hakkımızda</h2>
      </div>

      <section className="pt-56 bg-[#f5f8fa]">
        <div className="container mx-auto max-w-2xl py-16 text-center">
          <h1 className="font-display text-jacarta-700 text-[#37c8ae] mb-8 text-4xl font-medium">
            Pam Dijital Reklam Ajansı
          </h1>
          <p className="mb-8 max-w-xl text-sm lg:text-md normal-case mx-auto">
            Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-[#f5f8fa]">
        <div className="container relative pb-32 pt-20 lg:pt-40 bg-main text-white text-center bg-cover bg-center overflow-hidden rounded-2.5xl" style={{ backgroundImage: "url('/images/hero/ekip2.png')" }}>
          <div className="group pt-20 pb-10">
            <p className="mb-10 px-10 normal-case font-bold">
              Markalara e-ticaretten korkmamalarını göstermek, geleceğin yatırımını şimdiden sağlatmak amacımız. Dijital serüveninize eşlik ediyor, dijitaldeki performansınızı yükseltmek için çok çalışıyoruz. Aklınızdaki her soruyu cevaplamaya hazırız. Aradığınız sorunun cevabını bulamadıysanız lütfen bizimle iletişime geçmekten çekinmeyin. Tüm sorularınızı içtenlikle cevaplamaya hazırız.
            </p>
          </div>
        </div>
      </section>

      <Story />
      <Partners />
      <Faq />
    </>
  );
};

export default About;
