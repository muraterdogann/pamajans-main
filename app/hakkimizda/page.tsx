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
        <meta name="description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />

        <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta property="og:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta property="og:url" content="https://pamajans.com/hakkimizda" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg" />
        <meta property="og:image:alt" content="Pam Ajans Hakkımızda" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta name="twitter:description" content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin." />
        <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg" />

        <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" type="image/svg+xml" />
      </Head>

      <div className="absolute w-full font-display text-white bg-main pt-16 pb-8 text-center text-xl ">
        <h2>Hakkımızda</h2>
      </div>

      <section className="pt-28 bg-[#f5f8fa]">
        <div className="container mx-auto max-w-2xl py-16 text-center">
          <h1 className="font-display text-jacarta-700 text-[#37c8ae] mb-8 text-4xl font-medium">
            Pam Dijital Reklam Ajansı
          </h1>
          <p className="mb-8 max-w-xl text-sm lg:text-md normal-case mx-auto">
            Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyor, dijital dünyada başarınız için çalışıyoruz. Türkiye&apos;nin en hızlı marka büyüten, en yenilikçi ajansıyız.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-[#f5f8fa]">
        <div className="container relative pb-32 pt-20 lg:pt-40 bg-main text-white text-center bg-cover bg-center overflow-hidden rounded-2.5xl" style={{ backgroundImage: "url('/images/hero/ekip-genelv4.webp')" }}>
          <div className="group pt-20 pb-10">
            <p className="mb-10 px-10 normal-case font-bold">
              Markaların dijital dünyadaki varlıklarını güçlendirmeyi amaçlıyoruz. E-ticaret dünyasında cesaretlendiriyor ve dijital performansınızı artırmak için çalışıyoruz. Sorularınız varsa bizimle iletişime geçmekten çekinmeyin.
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
