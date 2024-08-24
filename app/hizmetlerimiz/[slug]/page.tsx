import BlogContent from "@/component/slug-page/blogContent";
import { redirect } from "next/navigation";
import Head from "next/head";
import { OgImage } from "../action";

// Yoast Head JSON tiplerini ekledik
type YoastHeadJson = {
  title?: string;
  description?: string;
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_image?: OgImage[];
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  schema?: any;
};

type TPostData = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  yoast_head_json: YoastHeadJson;
};

type TPageProps = {
  params: {
    slug?: string;
  };
};

const getPamAjansSlugs = async (): Promise<string[]> => {
  const response = await fetch(
    "https://dashboard.pushouse.com/wp-json/custom/v1/pages/pamAjans"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch slugs");
  }
  const pages = await response.json();
  return pages.map((page: { slug: string }) => page.slug);
};

const getPostData = async (slug: string): Promise<TPostData | null> => {
  const response = await fetch(
    `https://dashboard.pushouse.com/wp-json/wp/v2/pages?slug=${slug}`
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data[0] || null;
};

const Page = async ({ params }: TPageProps) => {
  const pamAjansSlugs = await getPamAjansSlugs();

  if (!pamAjansSlugs.includes(params.slug!)) {
    return redirect("/not_found");
  }

  const postData = await getPostData(params.slug!);
  if (!postData) return redirect("/not_found");

  const adjustSchemaForFrontend = (
    schema: any,
    oldDomain: string,
    newDomain: string
  ): any => {
    if (!schema) return schema;
    const schemaString = JSON.stringify(schema);
    return JSON.parse(
      schemaString.replace(new RegExp(oldDomain, "g"), newDomain)
    );
  };

  return (
    <>
      <Head>
        <title>
          {postData.yoast_head_json?.title || postData.title.rendered}
        </title>

        <meta
          name="description"
          content={
            postData.yoast_head_json?.description || "Varsayılan Açıklama"
          }
        />
        <link
          rel="icon"
          href="/images/pam-ajans-logo-siyah.svg"
          type="image/svg+xml"
        />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <meta name="author" content="pamajans" />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:locale"
          content={postData.yoast_head_json?.og_locale || "tr_TR"}
        />
        <meta
          property="og:type"
          content={postData.yoast_head_json?.og_type || "article"}
        />
        <meta
          property="og:title"
          content={
            postData.yoast_head_json?.og_title || postData.title.rendered
          }
        />
        <meta
          property="og:description"
          content={
            postData.yoast_head_json?.og_description || "Varsayılan Açıklama"
          }
        />
        <meta
          property="og:url"
          content={new URL(postData.slug, "https://pamajans.com/").href}
        />
        <meta property="og:site_name" content="pamajans" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/pamajans/"
        />

        {postData.yoast_head_json?.og_image?.map(
          (image: OgImage, index: number) => (
            <meta
              key={index}
              property="og:image"
              content={
                new URL(image.url, "https://dashboard.pushouse.com").href
              }
            />
          )
        )}

        <meta
          name="twitter:card"
          content={
            postData.yoast_head_json?.twitter_card || "summary_large_image"
          }
        />
        <meta
          name="twitter:title"
          content={
            postData.yoast_head_json?.twitter_title || postData.title.rendered
          }
        />
        <meta
          name="twitter:description"
          content={
            postData.yoast_head_json?.twitter_description ||
            "Varsayılan Açıklama"
          }
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              adjustSchemaForFrontend(
                postData.yoast_head_json?.schema,
                "dashboard.pushouse.com",
                "pamajans.com"
              )
            ),
          }}
        />
      </Head>
      <section className="relative w-full">
        <div className="font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h2 className="capitalize">{postData.title.rendered}</h2>
        </div>
        <BlogContent content={postData.content?.rendered || ""} />
      </section>
    </>
  );
};

export default Page;
