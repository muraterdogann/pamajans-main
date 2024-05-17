"use client"
import Link from "next/link";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { reqUrl } from "@/config";
import Image from "next/image";

interface Post {
  featured_media: number | null;
  id: number;
  slug: string;
  title: { rendered: string };
  content?: { rendered: string };
  featuredImageUrl?: string;
}



const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

console.log(posts)
useEffect(() => {
  const fetchData = async () => {
      try {
          const res = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content,featured_media&per_page=40`);
          const fetchedPosts: Post[] = await res.json();
          
          const processedPosts = await Promise.all(fetchedPosts.map(async (post) => {
            console.log(post)
              if (post.featured_media) {
                  const mediaRes = await fetch(`${reqUrl}/media/${post.featured_media}`);
                  const media = await mediaRes.json();
                  post.featuredImageUrl = media.source_url;
              }
              return post;
          }));

          setPosts(processedPosts);
      } catch (error) {
          console.error("fetching erro", error);
      }
  };

  fetchData();
}, []);



  return (
    <>
     <Head>
      <title>Pam Ajans Başarı Hikayelerir</title>
      
            <meta name="description" content="Pushouse blogunda e-ticaret modüülleri, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz." />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index,follow" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Pushouse Blog - En Güncel Yazılar" />
            <meta property="og:description" content="Pushouse blogunda e-ticaret modüülleri, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz." />
            <meta property="og:url" content="https://pamajans.com/basari-hikayeleri" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/assets/images/pushouse-logo.svg" />
            <meta property="og:image:alt" content="Pushouse Blog" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Pushouse Blog - En Güncel Yazılar" />
            <meta name="twitter:description" content="Pushouse blogunda teknoloji, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz." />
            <meta name="twitter:image" content="/assets/images/pushouse-logo.svg" />

    </Head>
      
    <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
        <h2>Başarı Hikayeleri</h2>
      </div>
      <section className="relative  pt-[5.5rem] lg:pt-24 mb-[8rem]">
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
