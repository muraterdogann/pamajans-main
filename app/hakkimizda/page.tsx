import React from "react";
import Story from "@/component/about/story";
import Partners from "@/component/partners/partners";
import Faq from "@/component/faq/faq";

export const metadata = {
  title: 'Hakkımızda | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı',
  description: 'Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.',
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
};

const About = () => {
  return (
    <>
      <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>Hakkımızda</h2>
      </div>

      <section className="relative pt-24 bg-[#f5f8fa]">
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
