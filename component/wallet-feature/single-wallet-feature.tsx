import Link from 'next/link';
import Image from 'next/image';
const SingleWalletFeature = () => {
  const singleWalletContent = [
    {
      id: 1,
      icon: "w1",
      title: "Sosyal Medya Reklam Yönetimi",
      text: 'Uzman ekibimizle sosyal medya reklamlarınızı yönetiyor, performans odaklı stratejilerle marka değerinizin yükselmesini sağlıyoruz.',
      path: "/hizmetlerimiz/meta-reklam-yonetimi",
    },
    {
      id: 2,
      icon: "w2",
      title: "Google Reklam Yönetimi",
      text: 'Google ADS ile satışlarınızı artırıyor, doğru bütçe ve hedef kitle yönetimiyle başarıya ulaşmanızı sağlıyoruz.',
      path: "/hizmetlerimiz/google-reklam-yonetimi",
    },
    {
      id: 3,
      icon: "w3",
      title: "E-ticaret Web Sitesi",
      text: 'E-ticaret sitenizi kuruyor, düzenliyor ve yönetiyoruz; lider markaların ayrıcalıklı teklifleriyle sitenizi hayata geçiriyoruz.',
      path: "/hizmetlerimiz/e-ticaret-web-site-kurulumu",
    },
    {
      id: 4,
      icon: "w4",
      title: "Kurumsal Web Sitesi",
      text: 'İşletmenizin prestijini artırmak için özel veya hazır yazılım çözümleri ile kurumsal web sitenizi oluşturuyoruz.',
      path: "/hizmetlerimiz/kurumsal-web-site-kurulumu",
    },
    {
      id: 5,
      icon: "w5",
      title: "SEO",
      text: 'Arama motoru optimizasyonu ile web sitenizi üst sıralara taşıyarak organik trafik ve satışlarınızı artırıyoruz.',
      path: "/hizmetlerimiz/seo-yonetimi",
    },
    {
      id: 6,
      icon: "w6",
      title: "Pazaryeri ve E-ihracat",
      text: 'E-ticaretinizi yurtdışına açıyor, Amazon, eBay, Allegro, Zalando, Ozon, Etsy ve daha birçok platformda süreçlerinizi yönetiyoruz.',
      path: "/hizmetlerimiz/pazaryeri-giris-destegi",
    },    
  ];
  return (
    <>
      {singleWalletContent.map((item) => (
        <Link href={item.path || "#"} key={item.id}>
          <div
            className="mb-12 min-h-[265px] rounded-2.5xl border border-jacarta-100 bg-white p-8 pt-0 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
            key={item.id}
          >
            <div className="mb-9 -mt-8 inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-jacarta-100 bg-white dark:border-jacarta-600 dark:bg-jacarta-700">
              <Image
                src={`/images/pam-ajans/${item.icon}.svg`}
                alt="icon"
                width="24"
                height="24"
                className="h-12 w-12"
              />
            </div>

            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white h-[49.78px]">
              {item.title}
            </h3>
            <p className=" normal-case h-[120px]">{item.text}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SingleWalletFeature;