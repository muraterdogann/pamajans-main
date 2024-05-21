
import Link from "next/link";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { fetchPosts  } from "./action";
import { Viewport } from "next";

export const viewport:Viewport ={
  width:"device-width",
  initialScale:1,
}

export const metadata = {
  title: "Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
  description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
  icons: {
    icon: '/images/pam-ajans-logo-siyah.svg',
  },
  charSet: "utf-8",
  viewport: viewport,
  robots: "index,follow",
  openGraph: {
    title: "Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    url: "https://pamajans.com/basari-hikayeleri",
    type: "website",
    image: "/public/images/pam-ajans-logo-siyah.svg",
    imageAlt: "PamAjans Başarı Hikayeleri"
  },
  twitter: {
    card: "summary_large_image",
    title: "Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı",
    description: "Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin.",
    image: "/public/images/pam-ajans-logo-siyah.svg"
  },


  
};


const Blog = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <Head>
        <title>Pam Ajans Başarı Hikayelerir</title>
        <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <meta property="og:url" content="https://pamajans.com/basari-hikayeleri" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/pam-ajans-logo-siyah.svg" />
        <meta property="og:image:alt" content="PamAjans Başarı Hikayeleri" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <meta name="twitter:image" content="/public/images/pam-ajans-logo-siyah.svg" />
      </Head>

      <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>Başarı Hikayeleri</h2>
      </div>
      <section className="relative pt-[5.5rem] lg:pt-24 mb-[8rem]">
        <div className="py-16 md:py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="relative">
                  <div className="overflow-hidden rounded-2xl transition-shadow hover:shadow-lg">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="">
                        <Image
                          height={600}
                          width={370}
                          src={post.featuredImageUrl || ""}
                          alt={post.title.rendered}
                          className="transition-opacity duration-300 ease-in-out opacity-100 hover:scale-125 hover:duration-800 hover:ease-in-out"
                        />
                      </div>
                    </Link>
                    <div className="absolute inset-x-0 bottom-0 h-[8rem] pb-2 bg-black rounded-b-lg bg-opacity-50 text-white p-4 opacity-100 hover:opacity-0 transition-opacity duration-300 ease-in-out backdrop-filter backdrop-blur-lg">
                      <h2 className="font-display text-xl mb-2">
                        <Link href={`basari-hikayeleri/${post.slug}`}>
                          {post.title.rendered}
                        </Link>
                      </h2>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
