import BlogContent from "@/component/slug-page/blogContent";
import { redirect } from "next/navigation";
import { getPostData, OgImage } from "../action";
import Head from "next/head";

type TPageProps = {
  params: {
    slug?: string;
  };
};

const Page = async ({ params }: TPageProps) => {
  console.log(params)
  const postData = await getPostData(params.slug!);
  console.log(postData)
  if (!postData) redirect("/not_found");

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
      {" "}
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
          <h1 className="capitalize" >{postData.title.rendered}</h1>
        </div>
        <BlogContent content={postData.content?.rendered || ""} />
      </section>
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
          <h2 className="text-md font-medium text-black-700 mb-4 sm:mb-6 leading-snug">
            Hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </h2>
          <a
            href="/iletisim"
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base text-white bg-black font-medium rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            İletişime Geç
          </a>
        </div>
      </div>
    </>
  );
};
export default Page;
