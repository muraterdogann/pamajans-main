import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import { reqUrl } from "@/config";

interface Post {
  featured_media: number | null;
  id: number;
  slug: string;
  title: { rendered: string };
  content?: { rendered: string };
  featuredImageUrl?: string;
}

interface BlogProps {
  posts: Post[];
}
const BlogListHead = () => {
  return (
    <Head>
      <title>Pushouse Blog - En Güncel Yazılar</title>
      <meta
        name="description"
        content="Pushouse blogunda e-ticaret modüülleri, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz."
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Pushouse Blog - En Güncel Yazılar" />
      <meta
        property="og:description"
        content="Pushouse blogunda e-ticaret modüülleri, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz."
      />
      <meta property="og:url" content="https://pushouse.com/blog" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/images/pushouse-logo.svg" />
      <meta property="og:image:alt" content="Pushouse Blog" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pushouse Blog - En Güncel Yazılar" />
      <meta
        name="twitter:description"
        content="Pushouse blogunda teknoloji, pazarlama ve daha fazlası hakkında en güncel yazıları bulabilirsiniz."
      />
      <meta name="twitter:image" content="/assets/images/pushouse-logo.svg" />
    </Head>
  );
};
const News_item: React.FC<BlogProps | any> = ({ posts }) => {
  const [firstParagraphs, setFirstParagraphs] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    // This will run only on the client-side
    const parser = new DOMParser();
    const newFirstParagraphs: { [key: number]: string } = {};

    (posts as any[]).forEach((post) => {
      if (post.content?.rendered) {
        const doc = parser.parseFromString(post.content.rendered, "text/html");
        const firstParagraph = doc.querySelector("p");
        newFirstParagraphs[post.id] = firstParagraph
          ? firstParagraph.innerHTML
          : "";
      }
    });

    setFirstParagraphs(newFirstParagraphs);
  }, [posts]);
  return (
    <>
      <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2 md:grid-cols-3">
        {(posts as any[]).map((post) => (
          <article key={post.id} className="relative">
            <div className="overflow-hidden rounded-2xl transition-shadow hover:shadow-lg">
              <Link href={`/post/${post.slug}`}>
                <div className="">
                  <Image
                    height={600}
                    width={370}
                    src={"${post.featuredImageUrl}"}
                    alt={post.title.rendered}
                    className="transition-opacity duration-300 ease-in-out opacity-100 hover:scale-125 hover:duration-800 hover:ease-in-out"
                  />
                </div>
              </Link>
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 opacity-100 hover:opacity-0 transition-opacity duration-300 ease-in-out backdrop-filter backdrop-blur-lg">
                <h2 className="font-display text-xl mb-2">
                  <Link href={`post/${post.slug}`}>{post.title.rendered}</Link>
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${reqUrl}/posts?_fields=id,slug,title,content,featured_media&per_page=40`
  );
  let posts: Post[] = await res.json();

  await Promise.all(
    posts.map(async (post) => {
      if (post.featured_media) {
        const mediaRes = await fetch(`${reqUrl}/media/${post.featured_media}`);
        const media = await mediaRes.json();
        post.featuredImageUrl = media.source_url;
      }
    })
  );

  return {
    props: {
      posts,
    },
    revalidate: 100,
  };
};

export default News_item;
