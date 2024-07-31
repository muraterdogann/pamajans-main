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
              <h2 className="text-jacarta-700 font-display mt-12 sm:mt-0 mb-8 text-2xl dark:text-white">
                Pam Ajans Kimdir?
                <br />{" "}
              </h2>

              <p className=" mb-8 text-sm leading-loose">
                2016’dan bugüne edindiğimiz yurt içi ve yurt dışı tecrübelerimiz ile markanızın tüm ihtiyaçlarını karşılıyoruz. Sizin için dijital dünyanın zorlu yollarındaki tüm çukurları kapatıyor, yolculuğunuza eşlik ediyoruz.

                E-ticaret stratejilerimizi geliştirmek için dünyadaki tüm gelişme ve trendleri yakından takip ediyoruz. Markanıza özel stratejileri oluşturuyor yüksek başarı için gereken çalışmayı gerçekleştiriyoruz. Uzun yıllardır dijital dünya ile içli dışlıyız. Markalarımızın a’dan z’ye tüm süreçlerini yönetiyor ve marka bilinirliğini arttırıyoruz. İşimizi severek yapıyor, bu mutluluğumuzu hem markanıza hem de size yansıtıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
