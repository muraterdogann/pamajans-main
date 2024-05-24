"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/pam-ajans-logo-siyah.svg";
import WhiteLogo from "/public/pam-ajans-logo-beyaz.svg";


import { useEffect, useState } from "react";
const {v4: uuidv4} = require("uuid");

export default function Header04() {
  const [toggle, setToggle] = useState(false);
  const [isCollapse, setCollapse] = useState<string | number | null>(null);
  const [isScroll, setScroll] = useState(false);

  // sticky menu
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 4) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

  type ServicePage={
    id:string,
    name:string,
    path:string,

    condition?: boolean;
  }

  type Service = {
    id:number,
    name:string,
    pages:ServicePage[],
  }

  
  /* -------------------------------------------------------------------------- */
  /*                            daynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  const hakkimizda:Service = {
    id: 1,
    name: "Hakkımızda",
    pages: [
      {
        id: uuidv4(),
        name: "Hakkımızda",
        path: "/hakkimizda",
      },
      {
        id: uuidv4(),
        name: "Ekibimiz",
        path: "/ekibimiz",
      },
      {
        id: uuidv4(),
        name: "Bize Katıl",
        path: "/iletisim",
      },
    ],
  };

  const hizmetlerimiz = {
    id: 3,
    name: "Hizmetlerimiz",
    pages: [
      {
        id: uuidv4(),
        name: "Meta Reklam Yönetimi",
        path: "/hizmetlerimiz/meta-reklam-yonetimi",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g transform="translate(-480)">
                <g transform="translate(480)">
                  <path
                    fillRule="nonzero"
                    d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
                  ></path>
                  <path
                    fill="#09244B"
                    d="M8.07 5.002c-1.595-.11-2.865.816-3.753 1.979-.893 1.17-1.522 2.72-1.87 4.268-.346 1.547-.433 3.189-.154 4.564.272 1.336.964 2.71 2.42 3.145 1.389.415 2.635-.175 3.587-.976.954-.802 1.78-1.946 2.446-3.051.522-.867.968-1.75 1.318-2.504.35.753.796 1.637 1.317 2.504.666 1.105 1.492 2.249 2.446 3.051.952.801 2.198 1.391 3.587.976 1.456-.435 2.148-1.809 2.42-3.145.28-1.375.192-3.017-.154-4.564-.348-1.548-.977-3.099-1.87-4.268-.887-1.163-2.157-2.09-3.752-1.979-1.734.12-2.97 1.469-3.687 2.488-.11.157-.212.313-.307.465a10.37 10.37 0 00-.308-.465c-.717-1.02-1.953-2.367-3.687-2.488zm2.85 5.025c-.283.715-.97 2.348-1.888 3.873-.621 1.032-1.313 1.958-2.02 2.552-.707.595-1.262.728-1.725.59-.396-.118-.817-.56-1.034-1.627-.208-1.027-.157-2.375.146-3.728.304-1.353.838-2.614 1.508-3.493.675-.885 1.369-1.242 2.024-1.196.766.053 1.53.705 2.188 1.642.368.523.643 1.052.8 1.386zm2.288 0c.282.715.97 2.348 1.887 3.873.622 1.032 1.314 1.958 2.02 2.552.708.595 1.262.728 1.726.59.395-.118.816-.56 1.033-1.627.209-1.027.158-2.375-.146-3.728-.304-1.353-.837-2.614-1.508-3.493-.675-.885-1.368-1.242-2.024-1.196-.766.053-1.53.705-2.188 1.642a9.591 9.591 0 00-.8 1.386z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Whatsapp Geri Bildirim ",
        path: "/hizmetlerimiz/whatsapp-geri-bildirim",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#09244B"
              d="M19.76 10.77l-.09-.35h-7.44v3.16h4.45a4.45 4.45 0 01-4.36 3.34 5.21 5.21 0 01-3.5-1.39A5 5 0 017.33 12a5.14 5.14 0 011.46-3.53 5 5 0 013.48-1.37 4.55 4.55 0 013 1.16L17.47 6a7.88 7.88 0 00-5.27-2 8.14 8.14 0 00-5.77 2.35 8.15 8.15 0 00-.09 11.21 8.37 8.37 0 006 2.44 7.45 7.45 0 005.41-2.27 8 8 0 002.08-5.54 9.88 9.88 0 00-.07-1.42z"
            ></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "E-ticaret Web Site Kurulumu",
        path: "/hizmetlerimiz/e-ticaret-web-site-kurulumu",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#09244B"
              strokeWidth="1.5"
              d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2z"
            ></path>
            <path
              stroke="#09244B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M8 12h8M10 15h4M18 9l-3-6M6 9l3-6"
            ></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Kurumsal Web Site Kurulumu",
        path: "/hizmetlerimiz/kurumsal-web-site-kurulumu",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#09244B"
              strokeWidth="1.5"
              d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12"
            ></path>
            <path
              stroke="#09244B"
              strokeWidth="1.5"
              d="M14.66 14.202l6.008-1.802c.595-.179.893-.268 1.082-.482a.996.996 0 00.1-.134c.15-.243.15-.553.15-1.175 0-2.45 0-3.675-.673-4.502a2.997 2.997 0 00-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673-.16.13-.305.275-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175.03.047.063.092.1.134.19.214.487.303 1.082.482l6.008 1.802M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 011.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 011.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32"
            ></path>
            <path
              stroke="#09244B"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M14 12.5h-4a.5.5 0 00-.5.5v2.162a.5.5 0 00.314.464l.7.28a4 4 0 002.972 0l.7-.28a.5.5 0 00.314-.464V13a.5.5 0 00-.5-.5z"
            ></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "E-ihcarat Danışmanlık",
        path: "/hizmetlerimiz/e-ihracat-danismanlik",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#09244B"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M12 3c-1.023 0-2.047.118-3.05.353A7.511 7.511 0 003.353 8.95a13.354 13.354 0 000 6.1 7.511 7.511 0 005.597 5.597c2.006.47 4.094.47 6.1 0a7.511 7.511 0 005.597-5.597c.235-1.003.353-2.027.353-3.05"
            ></path>
            <path
              stroke="#09244B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17 3h4m0 0v4.667M21 3l-6 7"
            ></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "ERP & CRM Kurulumu",
        path: "/hizmetlerimiz/erp-crm-kurulumu",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#09244B"
            version="1.1"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
          >
            <path d="M9.25 21.29c-1.71 0-3.32-.88-4.27-2.29a5.1 5.1 0 01-3.28-1.31A5.163 5.163 0 010 13.88c0-1.36.53-2.64 1.47-3.59a5.582 5.582 0 015.49-6.58h.01c1.29 0 2.53.45 3.51 1.25.79-.52 1.69-.76 2.67-.79 1.34 0 2.61.56 3.53 1.51.42-.09.85-.14 1.28-.14 3.33 0 6.04 2.71 6.04 6.04s-2.71 6.04-6.04 6.04h-.08c-.92 1.15-2.33 1.86-3.82 1.83h-.01c-.28 0-.55-.02-.82-.07a5.109 5.109 0 01-3.98 1.91zm-3.11-4.38l.31.63a3.148 3.148 0 002.81 1.75c1.1 0 2.14-.59 2.7-1.55l.41-.71.77.27c.3.1.61.15.92.15h.01c1 0 1.94-.53 2.46-1.39l.34-.56.65.08c.15.02.3.03.45.03 2.23 0 4.04-1.81 4.04-4.04a4.042 4.042 0 00-5.35-3.82l-.72.25-.43-.61a2.928 2.928 0 00-2.37-1.23c-.74.02-1.48.29-2.02.83l-.76.76-.7-.81a3.577 3.577 0 00-2.7-1.23c-1.98 0-3.58 1.61-3.58 3.58 0 .35.05.71.16 1.05l.2.66-.54.42c-.76.59-1.2 1.49-1.2 2.45 0 .88.38 1.73 1.04 2.33.66.6 1.52.88 2.4.78l.7-.07z"></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Pazaryeri Giriş Desteği",
        path: "/hizmetlerimiz/pazaryeri-giris-destegi",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path stroke="#09244B" strokeWidth="0" d="M19.152 14a1 1 0 001-1V9.752a4.019 4.019 0 00.3-.3 4 4 0 00.732-3.456l-1.063-4.238A1 1 0 0019.152 1h-16a1 1 0 00-.97.757l-1.06 4.237a4 4 0 00.733 3.456 3.838 3.838 0 00.3.3V22a1 1 0 001 1H14.3a1 1 0 000-2H4.151V10.9a3.955 3.955 0 003.912-1.311c.03.035.051.076.082.11A4.04 4.04 0 0011.11 11h.083a4.036 4.036 0 002.964-1.3c.032-.034.052-.076.082-.11a3.957 3.957 0 003.913 1.31V13a1 1 0 001 1zM7.386 3.134l-.292 3.5-.041.5A2.041 2.041 0 015.031 9a2.029 2.029 0 01-1.969-2.521L3.932 3H7.4zm5.3 5.211A2.009 2.009 0 0111.193 9h-.083a2.028 2.028 0 01-2.022-2.193L9.4 3h3.5l.317 3.8a2.013 2.013 0 01-.531 1.545zM17.272 9a2.042 2.042 0 01-2.023-1.86L14.9 3h3.47l.87 3.479A2.029 2.029 0 0117.272 9zm3.061 8.667l2.667.389-2.222 1.833.694 3.111L19 21.222 16.528 23l.694-3.111L15 18.056l2.667-.389L19 15z"></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Native App Yazılım Desteği",
        path: "/hizmetlerimiz/native-app-gelistirme",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path stroke="#09244B" strokeWidth="0" d="M12.434 4.693a.988.988 0 01.598-.458l.007-.002a.873.873 0 01.754.099l-.003-.002c.219.139.382.349.458.597l.002.008a.895.895 0 01-.123.777l.002-.003-4.21 7.307h3.077c.467 0 .87.274 1.057.671l.003.007a1.303 1.303 0 01.02 1.313l.003-.007H5.105a.982.982 0 01-.699-.291.958.958 0 01-.29-.688v-.014V13.994c0-.27.111-.513.29-.688a.98.98 0 01.699-.291h.028-.001 2.516l3.193-5.564-.971-1.739a.894.894 0 01-.119-.781l-.002.006a1.08 1.08 0 01.456-.602l.004-.003a.86.86 0 01.757-.095l-.006-.002c.26.069.473.235.602.455l.003.005.435.774zM7.257 17.66a1.2 1.2 0 01-.62.458l-.008.002a.882.882 0 01-.753-.099l.003.002a.967.967 0 01-.459-.598l-.001-.007a1.092 1.092 0 01.099-.78l-.003.006.726-1.21a1.71 1.71 0 011.932.577l.003.004zm11.661-4.644h.027c.273 0 .52.111.699.291.179.175.29.418.29.688v.014-.001.014c0 .27-.111.513-.29.688a.98.98 0 01-.699.291h-.028.001-1.403l.968 1.645a.988.988 0 01.071.782l.002-.007a1.08 1.08 0 01-.456.602l-.004.003a.867.867 0 01-.755.095l.006.002a.989.989 0 01-.602-.455l-.003-.005-3.629-6.338a2.818 2.818 0 01-.384-2.05l-.003.018c.091-.523.352-.974.723-1.304l.002-.002 2.903 5.032zM11.999.001h.077c2.185 0 4.229.602 5.976 1.65l-.053-.029a12.233 12.233 0 014.348 4.322l.031.056a11.51 11.51 0 011.621 5.923v.081V12v.077c0 2.185-.602 4.229-1.65 5.976l.029-.053a12.233 12.233 0 01-4.322 4.348l-.056.031A11.51 11.51 0 0112.077 24h-.081H12h-.077c-2.185 0-4.229-.602-5.976-1.65l.053.029a12.228 12.228 0 01-4.348-4.323L1.621 18A11.51 11.51 0 010 12.077v-.081-.073c0-2.185.602-4.229 1.65-5.976L1.621 6a12.233 12.233 0 014.322-4.348l.056-.031A11.51 11.51 0 0111.922 0h.081-.004zM22.451 12v-.09c0-1.901-.52-3.681-1.426-5.205l.026.047a10.48 10.48 0 00-3.772-3.771l-.05-.027a10.17 10.17 0 00-5.183-1.402h-.075.004-.075c-1.899 0-3.677.521-5.197 1.429l.046-.026a10.477 10.477 0 00-3.771 3.771l-.027.05a10.169 10.169 0 00-1.403 5.186v.065-.003.075c0 1.899.521 3.677 1.429 5.197l-.026-.046a10.48 10.48 0 003.772 3.771l.05.027a10.169 10.169 0 005.186 1.403h.067-.003.075c1.899 0 3.677-.521 5.197-1.429l-.046.026a10.478 10.478 0 003.775-3.773l.027-.05a10.125 10.125 0 001.403-5.174v-.055.003z"></path>
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "E-ticaret ve Reklam Eğitimi",
        path: "/hizmetlerimiz/e-ticaret-ve-reklam-egitimi",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path stroke="#09244B" strokeWidth="0" d="M17.673 5.606a3326.02 3326.02 0 01-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 003.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 01-5.726 3.302 2.884 2.884 0 01-2.582.02A40.184 40.184 0 015 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        ),
      },
    ],
  };

  const mobileCollapse = (id:string|number) => {
    
    if (isCollapse === id) {
      return setCollapse(null); // setCollapse fonksiyonuna null geçiliyor
    }
    setCollapse(id);
    
  };

  return <>
    {/* main desktop menu sart*/}
    <header
      className={`js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors ${isScroll ? "js-page-header--is-sticky" : ""
        }`}
    >
      <div className={`flex items-center px-6 py-6 xl:px-24 ${isScroll ? 'dark' : ''}`}>
        <Link className="shrink-0" href="/" >
          <div className="dark:hidden">
            <Image
              src={WhiteLogo}
              height={28}
              width={150}
              alt="Pam Ajans | Dijital Reklam Ajansı"
              className="max-h-7 h-auto "
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src={Logo}
              height={28}
              width={150}
              alt="Pam Ajans | Dijital Reklam Ajansı"
            />
          </div>
        </Link>
        {/* End  logo */}

        <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent w-full">
          <nav className="navbar w-full mt-24 lg:mt-0">
            <ul className="flex flex-col justify-center lg:flex-row">
              {/* hakkimizda */}
              <li className="js-nav-dropdown group relative">
                <button className="dropdown-toggle text-white font-display hover:text-accentPam focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full">
                  <span
    
                   
                  >
                    Hakkımızda
                  </span>
                  <i className="lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </i>
                </button>
                <ul className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-1 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2">
                  {hakkimizda?.pages?.map((page) => (
                    <li key={page.id}>
                      <Link
                        href={page.path}
                        className="dark:hover:bg-jacarta-100  hover:text-accent focus:text-accent hover:bg-jacarta-100 flex items-center rounded-xl px-5 py-2 transition-colors justify-between "
                      >

                        <span
                          className="font-display text-jacarta-700 text-sm dark:text-jacarta-700"
                        >
                          {page.name}
                        </span>
                        {page.condition ? (
                          <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                            new
                          </span>
                        ) : undefined}

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* hizmetlerimiz */}
              <li className="js-nav-dropdown nav-item dropdown group relative">
                <button className="dropdown-toggle text-white font-display hover:text-accentPam focus:text-accentPam dark:hover:text-accentPam dark:focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full">
                  <span
                    className=""
                        
                   
                  >
                    Hizmetlerimiz
                  </span>
                  
                  <i className="lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </i>
                </button>
                <ul
                  className="dropdown-menu -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
                  aria-labelledby="navDropdown-1"
                >
                  {hizmetlerimiz?.pages?.map((page) => (
                    <li key={page.id}>
                      <Link
                        href={page.path}
                        className="dark:hover:bg-jacarta-100 hover:text-accent focus:text-accent hover:bg-jacarta-100 flex items-center rounded-xl px-5 py-2 transition-colors "
                      >

                        <span className="mr-3 rounded-xl p-[0.375rem]">
                          {page?.icon}
                        </span>
                        <span className="font-display text-jacarta-700 text-sm dark:text-jacarta-700">
                          {page?.name}
                        </span>

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* page */}
              <li className="group relative">
                <Link href="/referanslar">
                  <span className="text-white font-display hover:text-accentPam focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full cursor-pointer dark:hover:text-accentPam dark:focus:text-accentPam">
                    <span
                    >
                      Referanslar
                    </span>
                  </span>
                </Link>
              </li>

              {/* resource */}
              <li className="group relative">
                <Link href="/basari-hikayeleri">
                  <span className="text-white font-display hover:text-accentPam focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full cursor-pointer dark:hover:text-accentPam dark:focus:text-accentPam">
                    <span
                    >
                      Başarı Hikayeleri
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* End menu for desktop */}
        </div>
        {/* header menu conent end for desktop */}

        <div className="hidden  justify-end lg:flex">
          {/* <!-- CTA --> */}
          <Link href="/iletisim" className="min-w-[150px] rounded-[10px] bg-second text-white py-3 px-8 text-center font-semibold transition-all hover:bg-white hover:text-second">
            {" "}
            Teklif Al
          </Link>
        </div>

        <div className="ml-auto flex justify-center lg:hidden">
          <button
            className="js-mobile-toggle border-jacarta-100 hover:bg-second focus:bg-second group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-accentPam"
            aria-label="open mobile menu"
            onClick={() => setToggle(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
            </svg>
          </button>
        </div>
        {/* End mobile toggle button */}
      </div>
    </header>
    {/* main desktop menu end */}

    {/* start mobile menu and it's other materials  */}
    <div
      className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${toggle ? "nav-menu--is-open" : "hidden"
        }`}
    >
      <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
        <Link href="/">
        <div className="dark:hidden">
          <Image
            src={Logo}
            height={28}
            width={130}
            alt="Pam Ajans Logo"
            className="max-h-7 h-auto "
          />
        </div>

        <div className="hidden dark:block">
          <Image
            src={WhiteLogo}
            height={28}
            width={130}
            alt="Pam Ajans Logo"
          />
        </div>
        </Link>
        <button
          className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          onClick={() => setToggle(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
        </button>
      </div>
      {/* mobile menu top header content */}


      <nav className="navbar w-full mt-24">
        <ul className="flex flex-col lg:flex-row">
          <li className="js-nav-dropdown group relative">
            <button
              onClick={() => mobileCollapse(hakkimizda.id)}
              className="dropdown-toggle text-jacarta-700 font-display hover:text-second focus:text-second dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full"
            >
              <span
                className=""
              >
                {hakkimizda.name}
              </span>
              <i className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-4 w-4 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                </svg>
              </i>
            </button>
            <ul
              className={`dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === hakkimizda.id ? "block" : "hidden"
                }`}
            >
              {hakkimizda?.pages?.map((page) => (
                <li key={page.id} onClick={() => setToggle(false)}>
                  <Link
                    href={page.path}
                    className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-100 flex items-center rounded-xl px-5 py-2 transition-colors"
                  >

                    <span
                      className="font-display dark:text-accent text-sm dark:text-jacarta-700"
                    >
                      {page.name}
                    </span>
                    {page.condition ? (
                      <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                        new
                      </span>
                    ) : undefined}

                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="js-nav-dropdown nav-item dropdown group relative">
            <button
              onClick={() => mobileCollapse(hizmetlerimiz.id)}
              className="dropdown-toggle text-jacarta-700 font-display hover:text-second focus:text-second flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full"
            >
              <span
                className=""
              >
                {hizmetlerimiz.name}
              </span>
              <i className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="h-4 w-4 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                </svg>
              </i>
            </button>
            <ul
              className={`dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === hizmetlerimiz.id ? "block" : "hidden"
                }`}
              aria-labelledby="navDropdown-1"
            >
              {hizmetlerimiz?.pages?.map((page) => (
                <li key={page.id} onClick={() => setToggle(false)}>
                  <Link
                    href={page.path}
                    className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-100 flex items-center rounded-xl px-5 py-2 transition-colors"
                  >

                    <span className="mr-3 rounded-xl p-[0.375rem]">
                      {page.icon}
                    </span>
                    <span className="font-display text-jacarta-700 text-sm dark:text-jacarta-700">
                      {page.name}
                    </span>

                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* page */}
          <li className="group relative " onClick={() => setToggle(false)}>
            <Link href="/referanslar" >
              <span className="text-jacarta-700 font-display hover:text-accentPam focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full cursor-pointer">
                <span
                >
                  Referanslar
                </span>
              </span>
            </Link>
          </li>

          {/* resource */}
          <li className="group relative " onClick={() => setToggle(false)}>
            <Link href="/basari-hikayeleri">
              <span className="text-jacarta-700 font-display hover:text-accentPam focus:text-accentPam flex items-center justify-between py-3.5 text-base dark:text-jacarta-700 lg:px-5 w-full cursor-pointer">
                <span
                >
                  Başarı Hikayeleri
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* End navbar mobile menu  */}
      <div className="mt-10 w-full lg:hidden">
        
        <Link href="/iletisim" className="bg-second p-shadow block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
            {" "}
            Teklif Al
          </Link>
        
        <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />
        <div className="flex items-center justify-center space-x-5">
          <Link className="group" target="_blank" href="https://www.facebook.com/pamajans/?locale=tr_TR">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook"
              className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </Link>
      
          <Link className="group" target="_blank" href="https://www.instagram.com/pamajans/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>
          <Link className="group" href="https://www.tiktok.com/@pamajans" target="_blank">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="tiktok"
              className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </Link>
          <Link className="group" href="https://tr.linkedin.com/company/pam-dijital-reklam-ajans%C4%B1" target="_blank">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
            >
             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>
        </div>
      </div>
      {/* mt-10 w-full lg:hidden */}
    </div>
  
  </>;
}