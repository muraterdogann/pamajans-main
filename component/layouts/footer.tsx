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
      <footer className="text-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Logo */}
              <div className="mb-6">
                <Link href="/" aria-label="Pamajans Logo">
                  <Image
                    width={130}
                    height={28}
                    src="/images/pam-ajans-logo-siyah.svg"
                    className="max-h-5 dark:hidden"
                    alt="Pam Dijital Reklam Ajansı"
                  />
                </Link>
                <Link href="/" aria-label="Pamajans Logo">
                  <Image
                    width={130}
                    height={28}
                    src="/images/pam-ajans-logo-beyaz.svg"
                    className="hidden max-h-7 dark:block"
                    alt="Pam Dijital Reklam Ajansı"
                  />
                </Link>
              </div>
              {/* Contact Info */}
              <div className="mb-6">
                <p className="text-sm mb-1">
                  <a href="https://maps.app.goo.gl/8AYh9swS7jfbZtkF6" target="_blank" className="hover:underline">
                    Mustafa Kemal Mah., 2131. Sk. No: 28/2, 06510 Çankaya/Ankara
                  </a>
                </p>
                <p className="text-sm mb-1">
                  Telefon: <a href="tel:08503057726" className="hover:underline">0850 305 77 26</a> (Hafta içi 10:00 - 18:00)
                </p>
                <p className="text-sm mb-1">
                  <a href="mailto:info@pamajans.com" className="hover:underline">Mail: info@pamajans.com</a>
                </p>
              </div>
              {/* Socials */}
              <div className="flex space-x-4">
                {socialIcons.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-accent"
                  >
                    <svg className="h-5 w-5">
                      <use xlinkHref={`/icons.svg#icon-${item.text}`} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
              {footerMenuList.map((single) => (
                <div key={single.id} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm md:cursor-pointer" onClick={() => toggleMenu(single.id)}>
                      {single.title}
                    </h3>
                    <button
                      className="md:hidden text-black text-xl focus:outline-none"
                      onClick={() => toggleMenu(single.id)}
                      aria-expanded={openMenu[single.id.toString()]}
                    >
                      {openMenu[single.id.toString()] ? '-' : '+'}
                    </button>
                  </div>
                  <ul className={`space-y-2 transition-max-height duration-500 ease-in-out overflow-hidden ${openMenu[single.id.toString()] ? "max-h-screen" : "max-h-0"} md:max-h-full md:block`}>
                    {single.list.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} className="hover:underline text-sm">{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <span className="text-sm">© Pam Dijital Reklam Ajansı Tic. Ltd. Şti.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;