
import Testimonial_carousel from "../carousel/testimonialCarousel";


type TestimonialType={
    bg_jacerta?:string,
}

const Testimonial:React.FC<TestimonialType> = ({ bg_jacerta }) => {


  return (
    <div>
    {/* <!-- Testimonials --> */}
    <section
       className={
        bg_jacerta
          ? "testimonial-section bg-[#f5f8fa] py-24"
          : "testimonial-section bg-[#f5f8fa] py-24"
      }
    >
      <div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
        <div className="mx-auto mb-12 max-w-sm text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Mutlu Müşterilerimiz
          </h2>
          <p className="text-lg dark:text-jacarta-300 normal-case">
          Başarı öykülerimizle dolu bir yolculuk - siz de bu hikayelerin bir parçası olun.
          </p>
        </div>

        <Testimonial_carousel />
      </div>
    </section>
    {/* <!-- end testimonials --> */}
  </div>
  );
};

export default Testimonial;