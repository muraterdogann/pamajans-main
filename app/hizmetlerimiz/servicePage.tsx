"use client";  // Bu ifade sadece servicePage.tsx dosyasında gereklidir.
import React, { useEffect, useState } from "react";
import { getPostData, Post } from "./action";
import BlogContent from "@/component/slug-page/blogContent";

type TPageProps = {
  params: {
    slug?: string;
  };
};

const ServicePage = ({ params }: TPageProps) => {
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      if (params.slug && params.slug.length) {
        const data = await getPostData(params.slug!);
        setPostData(data);
      } else {
        window.location.href = "/not_found";
      }
    };
    fetchPostData();
  }, [params.slug]);

  if (!postData) return null;

  return (
    <>
      <section className="relative w-full">
        <div className="font-display text-jacarta-300 rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h2>{postData.title.rendered}</h2>
        </div>
        <BlogContent content={postData.content?.rendered || ""} />
      </section>
    </>
  );
};

export default ServicePage;
