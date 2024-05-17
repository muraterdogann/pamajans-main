import React from "react";
import referans_data from "@/public/data/referans_data";
import Image from "next/image";
import Headline from "@/component/wallet-btn/headLine";
export const metadata = {
  title: ' Referanslar | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı',
  description: 'Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.',
  icons: {
      icon:'/images/pam-ajans-logo-siyah.svg',
  }
}
const Index = () => {
  return (
    <>
      <section className="relative lg:pb-48 pb-24 w-full">
        <Headline
          text="Referanslarımız"
          classes="font-display text-jacarta-300 text-white bg-main rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] pt-32 pb-8 mb-12 text-center text-5xl dark:text-white"
        />
        <div className="grid mt-8 lg:grid-cols-5 grid-cols-3 lg:ml-8 ">
          {referans_data.map((item, index) => (
            <div key={index}>
              <Image src={item} alt={`Referans ${index}`} width={400} height={400} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
