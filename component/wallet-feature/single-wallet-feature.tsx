import Link from 'next/link';
import Image from 'next/image';
const SingleWalletFeature = () => {
  const singleWalletContent = [
    {
      id: 1,
      icon: "w1",
      title: "Sosyal Medya Reklam Yönetimi",
      text: 'Alanında uzman ekibimiz, 7 yıllık deneyimle sosyal medya reklamlarınızı yönetir, performans odaklı stratejilerle marka değerinizi artırırız.',
      path: "/meta-reklam-yonetimi",
    },
    {
      id: 2,
      icon: "w2",
      title: "Google Reklam Yönetimi",
      text: 'Google ADS ile satışlarınızı artırın. Doğru bütçe, hedef kitle ve strateji yönetimiyle başarıyı yakalayın.',
      path: "/google-reklam-yonetimi",
    },
    {
      id: 3,
      icon: "w3",
      title: "E-ticaret Web Sitesi",
      text: 'E-ticaret sitenizi kurar, düzenler ve yönetiriz. Lider markaların ayrıcalıklı teklifleriyle yeni sitenizi hayata geçirin ya da mevcut sitenizi geliştirin.',
      path: "/e-ticaret-web-site-kurulumu",
    },
    {
      id: 4,
      icon: "w4",
      title: "Kurumsal Web Sitesi",
      text: 'İşletmenizin prestijini artırın, özel veya hazır yazılım ile kurumsal web sitenizi oluşturalım.',
      path: "/kurumsal-web-site-kurulumu",
    },
    {
      id: 5,
      icon: "w5",
      title: "E-İhracat",
      text: 'Pazaryeri, kargo, muhasebe ve ERP entegrasyonlarınızı yönetir, süreçlerinizi kolaylaştırırız.',
      path: "/e-ihracat-danismanlik",
    },
    {
      id: 6,
      icon: "w6",
      title: "Pazaryeri ve E-ihracat",
      text: 'E-ticaretinizi yurtdışına açın; Amazon, eBay, Allegro, Zalando, Ozon, Etsy, Fulfillment ve daha fazlasında süreçlerinizi yönetelim.',
      path: "/pazaryeri-giris-destegi",
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

            <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
              {item.title}
            </h3>
            <p className="dark:text-jacarta-300 normal-case">{item.text}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SingleWalletFeature;