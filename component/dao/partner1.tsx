import Image from 'next/image'

const Partner1 = () => {
  const partnerItem = [
    "zerrincan",
    "aski-nisantasi",
    "cadd-store",
    "holla-gugu",
    "mervellion",
    "moda-celikler",
    "karum-rouge",
    "beauty-omelette",
    "latanwood",
    "goldgarn-denim",
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
          <Image src={`/images/dao/${item}.jpg`} alt="pam ajans referanslar" width={150} height={60} />
        </div>
      ))}
    </>
  );
};

export default Partner1;