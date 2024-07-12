
import Image from 'next/image'
 
const Partner3 = () => {
  const partnerItem = [
    "e-ravza",
    "masalkiz",
    "secovet",
    "hemen-lastik",
    "sinem-kivanc",
    "hazelbutik",
    "lilijo",
    "morpho",
    "goldgarn-denim",
    "buqet",
    "still",
    "bysaygi",
    "mue-prive",
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

export default Partner3;
