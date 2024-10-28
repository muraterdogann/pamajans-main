import Link from "next/link";
import React from "react";
import Image from "next/image";
import { fetchPosts } from "./action";
import Head from "next/head";

const BasariHikayeleri = async () => {
  const posts = await fetchPosts();

  return (
    <>
      <Head>
        <title>Başarı Hikayeleri | Pam Ajans | Dijital Reklam, Performans ve Danışmanlık Ajansı</title>
        <meta
          name="description"
          content="Pam Ajans olarak, dijital reklam ajansı hizmetlerimizle markanızın çevrimiçi görünürlüğünü artırıyoruz. Dijital performans ajansı olarak, dijital dünyada başarıya ulaşmanız için yanınızdayız. Dijital danışmanlık ajansı hizmetlerimizle sektörde en iyi sonuçları elde etmek için hemen bizimle iletişime geçin."
        />
        <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" />
      </Head>

      <div className="font-display rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl">
        <h2>Başarı Hikayeleri</h2>
      </div>

      <section className="relative pt-20 lg:pt-32 mb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group overflow-hidden transition-all">
                <Link href={`/basari-hikayeleri/${post.slug}`}>
                  <div className="relative">
                    <Image
                      height={500}
                      width={800}
                      src={post.featuredImageUrl || ""}
                      alt={post.title.rendered}
                      className="h-60 w-full object-cover transition-transform duration-500 rounded-md"
                    />
                  </div>
                  <div className="pt-4">
                    <h2 className="text-sm font-semibold text-black transition-all group-hover:text-main">
                      {post.title.rendered.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'")}
                    </h2>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BasariHikayeleri;
