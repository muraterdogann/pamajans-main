import Image from "next/image";
import Link from "next/link";
import React from "react";


const NotFoundPage = () => {
  return (
 
      <>
      <div className="bg-main pt-[5.5rem] lg:pt-24 pb-24">
        {/* <!-- 404 --> */}
        <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              src="/images/gradient_light.jpg"
              alt="gradient"
              width={1920}
              height={789}
            />
          </picture>

          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <span className="mb-14 inline-block">
                <Image
                  src="/images/404.png"
                  width={336}
                  height={165}
                  alt="gradient"
                />
              </span>
              <h3 className="text-white font-display mb-6 text-4xl md:text-6xl">
                Sayfa Bulunamadı!
              </h3>
              <p className="text-white mb-12 text-lg leading-normal">
                Aradığınız Sayfa Taşınmış veya Silinmiş Olabilir.
              </p>
              <Link
                href="/"
                className="bg-second shadow-second-volume hover:bg-second-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Anasayfa Geri Dön
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end 404 --> */}
      </div>
    </>
  );
};

export default NotFoundPage;
