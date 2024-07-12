"use client"
import FaqAccordion from "./accordion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Faq = () => {
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    // Tarayıcı ortamında sayfa yolunu al
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  // Hakkımızda sayfasında mı kontrolü
  const isAboutPage = currentPath === '/hakkimizda';
  return (
    <div>
      {/* <!-- FAQ --> */}
      <section className="relative py-24 bg-main overflow-hidden">
      <div className="hidden md:block bg-black-blur h-1/2 w-1/3 absolute top-5 left-0 opacity-25 z-0"></div>
      <div className="hidden md:block bg-black-blur h-full w-2/3 absolute top-[20rem] right-0 opacity-50 z-0"></div>
        <div className="container">
          <div className="justify-between lg:flex lg:space-x-20 relative z-10">
            <div className="lg:w-[45%] z-10">
              <h2 className="mb-6 text-3xl text-jacarta-700 dark:text-white text-second">
                Sıkça Sorulan Sorular
              </h2>
              <p className="mb-12 text-md text-white normal-case">
              Tüm merak ettikleriniz burada: Pam Ajans'ta sorularınıza hızlı ve doğru yanıtları alırsınız, aradığınız cevabı bulamazsanız bizimle iletişime geçmekten çekinmeyin!
              </p>

              <FaqAccordion />

              <p className="text-lg text-jacarta-700 dark:text-jacarta-100 text-white z-10 relative">
                Aradığınız Sorunun Cevabı Burada Yok Mu?{" "}
                <Link href="/iletisim" className="text-accent lowercase">
                  İletişime Geç
                </Link>
              </p>
            </div>
            <div className="lg:w-[55%] z-10">
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <div className="relative mb-8 max-w-[13.125rem] self-end rounded-2.5xl bg-green p-8 shadow-2xl">
                  <Image
                    src="/images/patterns/pattern_circle_1.png"
                    height={68}
                    width={68}
                    className="absolute -top-10 -left-8 -z-10 animate-fly dark:z-0 dark:opacity-10"
                    alt=""
                  />
                  <div>
                    <span className="mb-2 block text-base text-white">
                      Aylık
                    </span>
                    <span className="mb-2 block text-2xl text-white">
                      15 Milyon+
                    </span>
                    <span className="block text-base text-white">
                     Bütçe Yönetimi
                    </span>
                  </div>
                </div>
                <Image
                  src="/images/pam-ajans-v2/sss-kapak.jpg"
                  width={320}
                  height={320}
                  className="mb-8 inline-block rounded-2.5xl"
                  alt=""
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/patterns/pattern_circle_2.png"
                  width={143}
                  height={143}
                  className="absolute -bottom-8 right-12 animate-fly dark:opacity-10"
                  alt=""
                />
                <div className="relative mx-auto max-w-xs self-start rounded-2.5xl bg-blue p-8 shadow-2xl">
                  <div className="absolute right-8 top-8 rounded-full bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-blue"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z" />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-2 block text-base text-white">
                      Doğru Ekip İle
                    </span>
                    <span className="mb-2 block text-2xl text-white">
                      5x daha fazla
                    </span>
                    <span className="block text-base text-white">
                     Kazanın
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end faq --> */}
      {!isAboutPage && ( <div className="bg-[#F5F8FA] pb-[16rem]"></div>)}
     
      </div>
  );
};

export default Faq;