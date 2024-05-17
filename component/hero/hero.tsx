import Link from "next/link";
import Image from "next/image";

const Hero_6 = () => {
  const heroContent = {
    meta: "PAM Dijital Reklam Ajansı",
    title: "Dijital Dünyada Markanızı Öne Çıkarın.",
    descriptions: `Markanızı en iyi şekilde temsil etmek ve dijital pazarda rekabet edebilmek için sizinle birlikte çalışıyoruz. Özgün ve etkili dijital reklam stratejileri ile işinizi büyütelim.`,
    btnText: "Ücretsiz Danışmanlık Alın",
  };
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative pb-32 pt-20 lg:pt-40 bg-main bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero/ekip2.png')" }}>
      <div className="hidden md:block bg-black-blur h-1/2 w-1/3 absolute top-5 left-0 opacity-25"></div>
        <div className="hidden md:block bg-black-blur h-full w-2/3 absolute top-[20rem] right-0 opacity-50"></div>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="/images/gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="/images/gradient_dark.jpg" alt="gradient dark" />
        </picture>
        <Image //w h 
          src="/images/patterns/pattern_donut.png"
          width="20"
          height="20"
          alt="pattern donut"
          // className="absolute right-0 top-0 -z-10"
        />

        <div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
          <div className="flex h-full justify-center items-center">
            <div className="flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20 static z-10">
              <div className="mb-8 mx-auto flex items-center space-x-3 rounded-3xl border border-jacarta-200 px-5 py-2 dark:border-jacarta-300">
                <Image
                  src="/images/pam-ajans/pam-ajans-roket.png"
                  alt="cryto app"
                  width="20"
                  height="20"
                />
                <span className="text-white text-xs font-bold uppercase tracking-wide dark:text-jacarta-100">
                  Son 7 Yılda Rekorlar Kıran
                </span>
              </div>
              <h2 className="text-second mb-6 text-center font-display text-3xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
                {heroContent.meta}
              </h2>
              <p className="mb-8 max-w-xl text-white text-center mx-auto text-sm lg:text-md dark:text-jacarta-200 normal-case">
              Veri ve analitik altyapımız, derinlemesine strateji bilgimiz, ileri teknoloji uygulamalarımız ve markalaşma uzmanlığımızla, işletmelere yüksek performanslı çözümler sunmaktayız. Biz, veriye dayalı stratejik yaklaşımımızla sektörde öne çıkan bir Dijital Performans Ajansıyız.
              </p>
              <div className="flex space-x-4 mx-auto">
                <Link href="/iletisim" className="rounded-full bg-second py-3 px-8 text-center font-semibold text-white transition-all hover:bg-white hover:text-second">
                  İletişime Geç
                </Link>
                <Link href="/referanslar" className="rounded-full bg-second py-3 px-8 text-center font-semibold text-white transition-all hover:bg-white hover:text-second">
                  Referanslarımız
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_6;