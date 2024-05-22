import React from "react";
import Address from "@/component/contact/addresess";
import Image from "next/image";
import FormToggleButton from "@/component/contact-btn";




const Contact = () => {
  

  return (
    <>
    <head>
  <title>İletişim | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
  <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="index,follow"/>
  

  <meta property="og:title" content="Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta property="og:url" content="https://pamajans.com/iletisim"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="/images/pam-ajans-logo-siyah.svg"/>
  <meta property="og:image:alt" content="Pam Ajans İletişim"/>
  

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="İletişim | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı"/>
  <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin."/>
  <meta name="twitter:image" content="/images/pam-ajans-logo-siyah.svg"/>
  

  <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" type="image/svg+xml"/>
  </head>
    <div>
      <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8  mb-12 text-center text-5xl"><h2 >İletişim</h2></div>
   
      <div className="pt-[5.5rem] lg:pt-12">
        
          
        

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
    </>
  );
};

export default Contact;
