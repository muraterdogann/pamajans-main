import React from "react";
import Address from "@/component/contact/addresess";
import Image from "next/image";
import FormToggleButton from "@/component/contact-btn";
import { Viewport } from "next";

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata = {
  title: "İletişim | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
  charSet: "utf-8",
  viewport: viewport,
  robots: "index,follow",
  openGraph: {
    title: "İletişim | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    url: "https://pamajans.com/iletisim",
    type: "website",
    image: "/public/images/pam-ajans-logo-siyah.svg",
    imageAlt: "Pam Ajans İletişim"
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    image: "/public/images/pam-ajans-logo-siyah.svg"
  },
};

const Contact = () => {
  const bgImage = "/images/page-title/knowledge_base_banner.jpg";

  return (
    <div>
      <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8  mb-12 text-center text-5xl"><h2 >İletişim</h2></div>
      {/* <Meta /> */}
      <div className="pt-[5.5rem] lg:pt-12">
        
          
        

        {/* <!-- Contact --> */}
        <section className="dark:bg-jacarta-800 relative py-8 ">
         
          <div className="container">
            
              
              <div className="lg:flex">

            <div className="mb-12 lg:mb-0 lg:w-1/2 lg:pr-12 mt-56 select-none">
              <h2 className="font-display text-jacarta-700 mb-4 text-2xl font-bold dark:text-white">
                Bizimle İletişime Geç. Ücretsiz Analiz İçin Sizi Arayalım.
              </h2>
              <ul className="dark:text-jacarta-300 mb-16 text-xl leading-normal">
                <li className="flex">
                  <svg className="h-8 w-8 text-green-300" fill="white" viewBox="0 0 24 24" stroke="#37c8ae">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Sosyal medya hesap analizi</span>
                </li>
                <li className="flex">
                  <svg className="h-8 w-8 text-green-300" fill="white" viewBox="0 0 24 24" stroke="#37c8ae">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Web site analizi</span>
                </li>
                <li className="flex">
                  <svg className="h-8 w-8 text-green-300" fill="white" viewBox="0 0 24 24" stroke="#37c8ae">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Performans analizi</span>
                </li>
              </ul>
              <Image
              width={123}
              height={123}
              src="/images/patterns/pattern_circle_2.png"
              alt="circle2"
              className="absolute animate-fly -top-2 left-20 lg:left-72"
              />
              <Image
              width={56}
              height={56}
              src="/images/patterns/pattern_circle_1.png"
              alt="circle2"
              className="absolute animate-fly top-32 left-40 lg:left-96 animate-fly"
              />
               <Image
              width={28}
              height={28}
              src="/images/patterns/pattern_circle_1.png"
              alt="circle2"
              className="absolute animate-fly top-48 left-[14rem] lg:left-[28rem]"
              />
          
            </div>
            <div className="lg:w-1/2">
              <div >
                <FormToggleButton />
              </div>
            </div>
            </div>
            
              
           
            <div className=" mt-20 flex flex-wrap justify-center m-10">
            <Address />
             
            </div>
            
              
                      
             
          </div>
        </section>
        {/* <!-- end contact --> */}
      </div>
    </div>
  );
};

export default Contact;
