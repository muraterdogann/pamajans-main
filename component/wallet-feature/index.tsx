import Link from "next/link";
import SingleWalletFeature from "./single-wallet-feature";

const WalletFeature = () => {
  return (
    <section className="relative bg-[#f5f8fa] py-24 dark:bg-jacarta-800">
      <div className="container">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Hizmetlerimizi Keşfedin
          </h2>
          <p className="text-lg dark:text-jacarta-300 normal-case">
            İşletmenizin ihtiyaç duyduğu dijital hizmetlerde, profesyonel ekibimizle yanınızdayız. E-ticaret, e-ihracat, reklam yönetimi, web site kurulumu ve entegrasyon hizmetlerimizle işinizi büyütün ve rekabette öne çıkın.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <SingleWalletFeature />
        </div>

        <p className="mt-4 text-center text-lg dark:text-jacarta-300">
          Hizmetlerimiz ile ilgileniyorsan.{" "}
          <Link href="/iletisim" className="text-accent">
            Hemen İletişime Geç
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WalletFeature;
