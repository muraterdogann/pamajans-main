import Image from "next/image";


const Partners = () => {
  const partnerGroup = [
    { id: 1, link: "https://www.google.com/partners/agency?id=7902512873", logo: "google-partner-pamajans" },
    { id: 2, link: "https://www.facebook.com/business/partner-directory/search?id=7451666201570778", logo: "meta-partner-pamajans" },
    { id: 3, link: "https://shopify.pxf.io/752JXy", logo: "shopify-partner-pamajans" },
    { id: 4, link: "https://www.ticimax.com/demotalep.aspx?r=NQWUG85NE276", logo: "ticimax-partner-pamajans" },
    { id: 5, link: "https://www.ideasoft.com.tr/?sc=21063271", logo: "ideasoft-partner-pamajans" },
    { id: 6, link: "https://www.paytr.com/uye-isyeri-olun/867f68562acf2e09e1ebb473251bb590ac3a3238b66b499308f17e6706e0b1c5", logo: "paytr-partner-pamajans" },
    { id: 7, link: "https://sipay.com.tr/", logo: "sipay-partner-pamajans" },
  ];

  return (
    <div className="dark:bg-jacarta-900 bg-[#] ">
      <div className="container">
        <h2 className="mt-5 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">İş Ortaklarımız</h2>
        <div className="flex flex-wrap justify-center py-8 ">
          {partnerGroup.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
              className="mx-4"
            >
              <Image
                src={`/images/partners/${item.logo}.png`}
                alt={`Partner ${item.id}`}
                width={130}
                height={70}
                className="object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
