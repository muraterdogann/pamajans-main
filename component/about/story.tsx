import Image from "next/image";

const Story = () => {
  return (
    <div>
      <section className="dark:bg-jacarta-800 relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>

        <div className="container">
          <div className="lg:flex lg:justify-between">
            {/* <!-- Image --> */}
            <div className="lg:w-[55%]">
              <div className="relative">
                <Image
                  src="/images/wallets/2020-11-19.png"
                  alt="Image"
                  width={515}
                  height={515}
                  className="mx-auto w-[80%] rotate-[8deg] rounded-[10rem]"
                />

                <Image
                  width={644}
                  height={523}
                  src="/images/hero/3D_elements.png"
                  alt="3d"
                  className="animate-fly absolute top-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* <!-- Info --> */}
            <div className="py-15 lg:w-[45%] lg:pl-16">
              <h2 className="text-jacarta-700 font-display mb-8 text-2xl dark:text-white">
                Pam Ajans Kimdir?
                <br />{" "}
              </h2>

              <p className="dark:text-jacarta-300 mb-8 text-md leading-normal normal-case">
                2016’dan bugüne edindiğimiz yurt içi ve yurt dışı tecrübelerimiz ile markanızın tüm ihtiyaçlarını karşılıyoruz. Sizin için dijital dünyanın zorlu yollarındaki tüm çukurları kapatıyor, yolculuğunuza eşlik ediyoruz.

                E-ticaret stratejilerimizi geliştirmek için dünyadaki tüm gelişme ve trendleri yakından takip ediyoruz. Markanıza özel stratejileri oluşturuyor yüksek başarı için gereken çalışmayı gerçekleştiriyoruz. Uzun yıllardır dijital dünya ile içli dışlıyız. Markalarımızın a’dan z’ye tüm süreçlerini yönetiyor ve marka bilinirliğini arttırıyoruz. İşimizi severek yapıyor, bu mutluluğumuzu hem markanıza hem de size yansıtıyoruz.
              </p>
              <div className="flex space-x-4 sm:space-x-5">
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-[#37c8ae]"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                  </svg>
                  <div>
                    <span className="font-display text-jacarta-700 block text-xl dark:text-white">
                      86%
                    </span>
                    <span className="dark:text-jacarta-300 text-jacarta-700">
                      Profil Ziyareti
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-[#37c8ae] animate-wiggle"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                  </svg>
                  <div>
                    <span className="font-display text-jacarta-700 block text-xl dark:text-white">
                      27%
                    </span>
                    <span className="dark:text-jacarta-300 text-jacarta-700">
                      Abone Sayısı
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-[#37c8ae] "
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                  </svg>
                  <div>
                    <span className="font-display text-jacarta-700 block text-xl dark:text-white">
                      19%
                    </span>
                    <span className="dark:text-jacarta-300 text-jacarta-700">
                      Takipçi Sayısı
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
