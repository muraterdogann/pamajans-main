
import Link from "next/link";

import React from "react";
import Image from "next/image";
import { fetchPosts  } from "./action";







const Blog = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <head>
        <title>Blog | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
        <meta name="description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <link rel="icon" href="/images/pam-ajans-logo-siyah.svg"/>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Blog | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta property="og:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <meta property="og:url" content="https://pamajans.com/basari-hikayeleri" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/pam-ajans-logo-siyah.svg" />
        <meta property="og:image:alt" content="Pam Ajans Blog" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı" />
        <meta name="twitter:description" content="Dijital reklam ajansı olarak markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ve danışmanlık ajansı olarak, dijital dünyada başarınız için yanınızdayız. Sektördeki en iyi hizmeti almak için Pam Ajans ile iletişime geçin." />
        <meta name="twitter:image" content="/public/images/pam-ajans-logo-siyah.svg" />
      </head>

      <div className="font-display drop-shadow-[black_2px_2px_6px] text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>Blog</h2>
      </div>
      <section className="relative pt-[5.5rem] lg:pt-24 mb-[8rem]">
  <div className="py-16 md:py-12">
    <div className="container">
      <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="relative">
            <div className="overflow-hidden rounded-xl transition-shadow hover:shadow-lg">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative group">
                  <Image
                    height={600}
                    width={370}
                    src={post.featuredImageUrl || ""}
                    alt={post.title.rendered}
                    className="transition-transform duration-700 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="relative bottom-0 left-0 right-0 h-44 bg-transparent backdrop-blur-md transition-all duration-500 ease-in-out group-hover:h-9 p-4 ">
                    <h2 className="font-display text-xl mb-2 text-black">
                      {post.title.rendered}
                    </h2>
                    <span className="text-black text-sm text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 group-hover:hidden">PAM AJANS 29/05/2024</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 w-3/5 place-self-center border-b-2 border-[#B8C0C6] group-hover:hidden"></div>
                  
                </div>
              </Link>
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
