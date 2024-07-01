import React from "react";
import Link from "next/link";
import { team_data } from "@/public/data/team_data";
import Headline from "../headline/headLine";
import Image from "next/image";
import Head from "next/head";

type TeamDataType = {
  id: string;
  name: string;
  title: string;
  image: string;
  linkedin: string;
};

const Team: React.FC = () => {
  const founders: JSX.Element[] = [];
  const digitalPerformances: JSX.Element[] = [];
  const developers: JSX.Element[] = [];
  const graphicDesigners: JSX.Element[] = [];

  team_data.forEach((item: TeamDataType) => {
    const { id, image, title, name, linkedin } = item;
    const card = (
      <div
        key={id}
        className="dark:bg-jacarta-700 text-center transition-shadow transform hover:scale-110 rounded-xl overflow-hidden"
      >
        <Image
          width={192}
          height={192}
          src={image}
          className="rounded-full mb-6 h-[10rem] w-[10rem] mx-auto lg:h-[14rem] lg:w-[14rem] object-cover grayscale hover:grayscale-0 transition duration-500 in-ease-out"
          alt={name}
          loading="eager"
          quality={100}
        />
        <h3 className="font-display text-jacarta-700 text-md dark:text-white">
          {name}
        </h3>
        <span className="text-jacarta-400 text-2xs font-medium tracking-tight">
          {title}
        </span>

        <div className="mt-3 flex justify-center space-x-5 mb-8">
          <Link href={linkedin} target="_blank" passHref>
           
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                className="group-hover:fill-accent fill-jacarta-300 h-4 w-4 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            
          </Link>
        </div>
      </div>
    );

    switch (id) {
      case "Founder":
      case "Director":
        founders.push(card);
        break;
      case "Digital Performance":
        digitalPerformances.push(card);
        break;
      case "Front-End Devoloper":
      case "Back-End Devoloper":
        developers.push(card);
        break;
      case "Graphic Design":
        graphicDesigners.push(card);
        break;
      default:
        break;
    }
  });

  return (
    <div>
      <Head>
        <title>Ekibimiz</title>
      </Head>
      <section className=" ">
        <div className="container mx-auto mt-8 lg:mx-12">
          <div className="grid item-center relative ">
            <div className="place-self-center ">
              <Headline
                text="Founders"
                classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white "
              />

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-2">
                {founders}
              </div>
            </div>

            <div className="place-self-center">
              <Headline
                text="Dijital Performans"
                classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white mt-16"
              />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-4">
                {digitalPerformances}
              </div>
            </div>
          </div>
          <div className="grid item-center">
            <div className="place-self-center">
              <Headline
                text="Grafik Tasarım"
                classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white mt-16"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 md:gap-[1.875rem] lg:grid-cols-1 place-center">
                {graphicDesigners}
              </div>
            </div>
          </div>
          <div className="grid item-center">
            <div className="place-self-center">
              <Headline
                text="Yazılım"
                classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white mt-16"
              />
              <div className="grid grid-cols-2 mb-16 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-3">
                {developers}
              </div>
            </div>
          </div>
          {/* <div className="grid item-center">
            <div className="place-self-center">
              <Headline text="Bize Katıl" classes="font-display text-jacarta-700 mb-12 text-center text-3xl mt-16"
              />
              <div className="grid grid-cols-1 mb-16">
                <Link href="/iletisim">
              <div className="dark:bg-jacarta-700 border text-center transition-shadow transform hover:scale-110 rounded-xl overflow-hidden"
      >
        <Image
          width={65}
          height={65}
          src='/images/plus.svg'
          className="rounded-full mb-6 h-[10rem] w-[10rem] mx-auto lg:h-[10rem] lg:w-[10rem] object-cover grayscale hover:grayscale-0 transition duration-500 in-ease-out"
          alt="Bize Katıl"
          loading="eager"
        />
        <h3 className="font-display text-jacarta-700 text-md dark:text-white">
          Bize Katıl
        </h3>
        <span className="text-jacarta-400 text-2xs font-medium tracking-tight">
          
        </span>

       
      </div>
</Link>
              </div>

            </div>

          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Team;
