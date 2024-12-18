
import Partner1 from './partner1';

import Partner3 from './partner3';
import Link from 'next/link';

const TrustedPartner = () => {
  return (
    <>
      {/* <!-- Partners --> */}
      <section className="overflow-hidden pt-20 pb-24 relative">
        <div className="container">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white text-second">
              Başarıya Ulaşmak İçin Doğru Adres
            </h2>
            <p className="text-sm lg:text-md  font-semibold text-base normal-case ">
              {"8 yıllık deneyim, 400'den fazla memnun müşteri. Dijital reklamda sizi zirveye taşımaya hazırız. Satışlarınızı en az üç katına çıkarmak için bizimle iletişime geçin. Potansiyelinizi keşfedin."}
            </p>
          </div>
        </div>
        <div className="mb-8 flex animate-marquee space-x-8">
          <Partner1 />
        </div>
        {/* End .animate-marqueeRight */}

        <div className="flex animate-marquee space-x-8">
          <Partner3 />
        </div>
        {/* animate-marquee */}
      </section>
      {/* <!-- end partners -->  */}
    </>
  );
};

export default TrustedPartner;
