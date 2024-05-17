import Image from 'next/image'

const Partner1 = () => {
  const partnerItem = [
    "zerrincan",
    "goldgarn-denim",
    "cadd-store",
    "latanwood",
    "senayin-butigi",
    "angel-mia",
    "moda-celikler",
    "beauty-omelette",
    "holla-gugu",
    "karum-rouge",
    "aski-nisantasi",
    "hediyemko",
    "eda-eratesli",
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6"
          key={i}
        >
          <Image src={`/images/dao/${item}.jpg`} alt="pam ajans referanslar" width={150} height={75} className="grayscale" />
        </div>
      ))}
    </>
  );
};

export default Partner1;