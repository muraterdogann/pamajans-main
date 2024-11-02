import { notFound } from "next/navigation";
import BlogContent from "@/component/slug-page/blogContent";
import { getPostData, OgImage } from "../action";
import Head from "next/head"; // Head bileşeni eklendi

type TPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: TPageProps) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    return {
      title: "Sayfa Bulunamadı",
      description: "Bu sayfa mevcut değil.",
    };
  }

  const yoast = postData.yoast_head_json;
  const title = yoast?.title || postData.title.rendered;
  const description = yoast?.description || "Varsayılan Açıklama";

  return {
    title,
    description,
    openGraph: {
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
      url: `https://pamajans.com/${params.slug}`,
      type: yoast?.og_type || "article",
      locale: yoast?.og_locale || "tr_TR",
      siteName: "Pam Ajans",
      images: yoast?.og_image
        ? yoast.og_image.map((image: OgImage) => ({
            url: image.url,
            alt: "Pam Ajans",
          }))
        : [],
    },
    twitter: {
      card: yoast?.twitter_card || "summary_large_image",
      title: yoast?.twitter_title || title,
      description: yoast?.twitter_description || description,
    },
  };
}

const Page = async ({ params }: TPageProps) => {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  const adjustSchemaForFrontend = (schema: any, oldDomain: string, newDomain: string): any => {
    if (!schema) return schema;
    const schemaString = JSON.stringify(schema);
    return JSON.parse(schemaString.replace(new RegExp(oldDomain, "g"), newDomain));
  };

  return (
    <>
      <Head>
      <link rel="icon" href="/images/pam-ajans-logo-siyah.svg" />
      </Head>
      <section className="relative w-full">
        <div className="font-display drop-shadow-[black_2px_2px_6px] rounded-bl-[60px] rounded-br-[60px] lg:rounded-bl-[120px] lg:rounded-br-[120px] text-white bg-main pt-32 pb-8 text-center text-5xl dark:text-white">
          <h1 className="capitalize">{postData.title.rendered}</h1>
        </div>
        <BlogContent content={postData.content?.rendered || ""} />
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

        {postData.yoast_head_json?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                adjustSchemaForFrontend(postData.yoast_head_json.schema, "dashboard.pushouse.com", "pamajans.com")
              ),
            }}
          />
        )}
      </section>
    </>
  );
};

export default Page;
