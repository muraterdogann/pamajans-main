// app/blog/[slug]/page.tsx
import parse, { domToReact, DOMNode } from "html-react-parser";
import { getPostData } from "./action"; 
import {
  WPBlockHeading,
  WPBlockParagraph,
  WPBlockImage,
  WPBlockButton,
  WPBlockList,
  WPBlockListItem,
} from "@/styledComponents/BlogContentStyles";
import { redirect } from "next/navigation";
import Head from "next/head";

interface TPageProps {
  params: {
    slug?: string;
  };
}

const replaceNodeWithComponent = (domNode: DOMNode) => {
  if (domNode.type === "tag" && domNode.name) {
    const children = domToReact(domNode.children as unknown as DOMNode[], {
      replace: replaceNodeWithComponent,
    });
    switch (domNode.name) {
      case "h1":
      case "h2":
        return <WPBlockHeading>{children}</WPBlockHeading>;
      case "p":
        return <WPBlockParagraph>{children}</WPBlockParagraph>;
      case "figure":
        return <WPBlockImage>{children}</WPBlockImage>;
      case "ul":
        return <WPBlockList>{children}</WPBlockList>;
      case "li":
        return <WPBlockListItem>{children}</WPBlockListItem>;
      case "div":
        return <WPBlockButton>{children}</WPBlockButton>;
      default:
        return null;
    }
  }
  return null;
};

const PostPage = async ({ params }: TPageProps) => {
  const postData = await getPostData(params.slug!);

  if (!postData) redirect("/not_found");

  const parsedContent = postData.content?.rendered
    ? parse(postData.content.rendered, { replace: replaceNodeWithComponent })
    : null;

  return (
    <>
      <Head>
        {/* Blog sayfasına özel meta bilgileri */}
        <title>{postData.title?.rendered || "Pam Ajans Blog"}</title>
        <meta name="description" content="Pam Ajans blog sayfasında dijital pazarlama, reklam yönetimi, sosyal medya stratejileri ve daha fazlasına dair güncel içeriklere ulaşabilirsiniz." />
        <link rel="icon" href="/images/pam-ajans-logo-siyah.webp" type="image/webp" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Pam Ajans" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title?.rendered || "Pam Ajans Blog"} />
        <meta property="og:description" content="Pam Ajans blog sayfasında dijital pazarlama, reklam yönetimi, sosyal medya stratejileri ve daha fazlasına dair güncel içeriklere ulaşabilirsiniz." />
        <meta property="og:url" content={`https://pamajans.com/blog/${postData.slug}`} />
        <meta property="og:site_name" content="Pam Ajans" />
        <meta property="og:image" content="/images/pam-ajans-blog-default.webp" />
        <meta property="og:image:alt" content="Pam Ajans" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title?.rendered || "Pam Ajans Blog"} />
        <meta name="twitter:description" content="Pam Ajans blog sayfasında dijital pazarlama, reklam yönetimi, sosyal medya stratejileri ve daha fazlasına dair güncel içeriklere ulaşabilirsiniz." />
        <meta name="twitter:image" content="/images/pam-ajans-blog-default.webp" />
      </Head>

      <section className="relative w-full mb-16 bg-[f5f8fa] h-auto">
        <div className="font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h2>{postData.title.rendered}</h2>
        </div>

        <div className="container mt-16 mb-16">
          <div className="normal-case">{parsedContent}</div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
