"use client";

import { footerMenuList, socialIcons } from "@/public/data/footer_data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (id: number) => {
    setOpenMenu((prev) => ({ ...prev, [id.toString()]: !prev[id.toString()] }));
  };

  return (
    <>
      <footer className="bg-gray-50 text-black py-12">
        <div className="container mx-auto px-4">
          {/* Footer Üst - Logo ve İletişim Bilgileri */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-8">
            <div className="lg:w-1/3 flex flex-col items-start space-y-4">
              {/* Logo */}
              <Link href="/" aria-label="Pamajans Logo" className="mb-4">
                <Image
                  width={130}
                  height={28}
                  src="/images/pam-ajans-logo-siyah.svg"
                  className="dark:hidden"
                  alt="Pam Dijital Reklam Ajansı"
                />
                <Image
                  width={130}
                  height={28}
                  src="/images/pam-ajans-logo-beyaz.svg"
                  className="hidden dark:block"
                  alt="Pam Dijital Reklam Ajansı"
                />
              </Link>

              {/* İletişim Bilgileri */}
              <address className="not-italic text-sm text-black-600">
                <p>
                  <a href="https://maps.app.goo.gl/8AYh9swS7jfbZtkF6" target="_blank" className="hover:underline">
                    Mustafa Kemal Mah., 2131. Sk. No: 28/2, 06510 Çankaya/Ankara
                  </a>
                </p>
                <p>
                  Telefon: <a href="tel:08503057726" className="hover:underline">0850 305 77 26</a> <span className="text-xs">(Hafta içi 10:00 - 18:00)</span>
                </p>
                <p>
                  <a href="mailto:info@pamajans.com" className="hover:underline">info@pamajans.com</a>
                </p>
              </address>

              {/* Sosyal Medya İkonları */}
              <div className="flex space-x-4 mt-4">
                {socialIcons.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    <svg className="h-6 w-6 text-gray-500 hover:text-accent">
                      <use xlinkHref={`/icons.svg#icon-${item.text}`} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Menü */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerMenuList.map((single) => (
                <div key={single.id} className="flex flex-col">
                  {/* Başlık ve Açılır Menü */}
                  <h3 className="font-semibold text-sm text-gray-800 mb-3 lg:cursor-pointer" onClick={() => toggleMenu(single.id)}>
                    {single.title}
                  </h3>
                  <ul className={`space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${openMenu[single.id.toString()] ? "max-h-screen" : "max-h-0"} lg:max-h-full lg:block`}>
                    {single.list.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} className="hover:underline text-sm text-black-600">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Alt */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
            <span>©2025 Pam Dijital Reklam Ajansı Tic. Ltd. Şti.</span>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;