import { footerMenuList, socialIcons } from "@/public/data/footer_data";
import Image from "next/image";



const Footer: React.FC = () => {
  return (
   <>
   
    <footer className="dark:bg-jacarta-900 page-footer bg-[#F5F8FA] pt-[1px]">
      <div className="container mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-7 gap-y-14 md:gap-y-0">
          <div className="col-span-1 md:col-span-4 md:flex md:flex-col md:justify-between">
            {/* Logo */}
            <div className="md:flex md:flex-col md:items-start md:mb-6">
              <a href="/">
                <Image
                  width={130}
                  height={28}
                  src="/images/pam-ajans-logo-siyah.svg"
                  className="max-h-5 dark:hidden"
                  alt="Pam Dijital Reklam Ajansı"
                />
              </a>
              <a href="/" className="mb-6">
                <Image
                  width={130}
                  height={28}
                  src="/images/pam-ajans-logo-beyaz.svg"
                  className="hidden max-h-7 dark:block mb-6"
                  alt="Pam Dijital Reklam Ajansı"
                />
              </a>
            </div>
            {/* Contact Info */}
            <div className="mb-12">
              <p className="dark:text-jacarta-300 text-sm mb-1">
                Mustafa Kemal Mah., 2131. Sk. No: 28/2, 06510 Çankaya/Ankara
              </p>
              <p className="dark:text-jacarta-300 text-sm mb-1">
                Telefon: PAM (0850 305 77 26) (Hafta içi 10:00 - 18:00)
              </p>
              <p className="dark:text-jacarta-300 text-sm mb-1">
                <a href="mailto:info@pamajans.com" className="normal-case">Mail: info@pamajans.com</a>
              </p>
            </div>
            {/* Socials */}
            <div className="flex space-x-5">
              {socialIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                    <use xlinkHref={`/icons.svg#icon-${item.text}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-cols-3 lg:-flex-col lg:ml-[16rem] gap-4 md:flex-row md:space-x-16">
            {footerMenuList.map((single) => (
              <div className={`md:w-auto ${single.diffClass}`} key={single.id}>
                <div className="lg:w-[140px]">
                  <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                    {single.title}
                  </h3>
                  <ul className="dark:text-jacarta-300 space-y-1">
                    {single.list.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="hover:text-accent dark:text-jacarta-300 text-sm mb-1"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-2 py-8 md:flex-row md:space-y-0">
          <span className="dark:text-jacarta-400 text-center text-sm mt-16 lg:mt-1">
            <span>© Pam Dijital Reklam Ajansı</span>
          </span>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
