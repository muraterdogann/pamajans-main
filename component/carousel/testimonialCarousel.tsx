import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonial_data } from "../../public/data/testimonial_data";
import Image from "next/image";

type TestimonialCarouselType={
    id:string,
    img?:string,
    title:string,
    desc:string,
    name:string,
}

const Testimonial_carousel:React.FC = () => {


  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{
        delay: 4000,
        }}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 1,
          },
          1024:{
            slidesPerView:2,
          }
        }}
        pagination={{ clickable: true }}
        className=" card-slider-4-columns !py-5 !overflow-visible"
      >
        {testimonial_data.map((item) => {
          const { id,title, desc, name } = item;
          return (
            <SwiperSlide className="text-white" key={id}>
              <div
                className="testimonial-item flex flex-wrap gap-5 rounded-2.5xl bg-white p-12 dark:bg-jacarta-700 lg:flex-nowrap  border border-jacarta-100"
              >
                <div className="-ml-14 -mt-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-accentPam md:mb-0 md:w-16">
                  <Image src="/images/testimonials/quote.webp" width={22} height={19} alt="quote" />
                </div>

                <div className="mb-4 h-[400px] sm:h-[280px] md:mb-0">
                  <div className="-ml-1 mb-3 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="h-5 w-5 fill-orange"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
                    </svg>
                  </div>
                  <p className="testimonial-desc text-md leading-normal text-jacarta-700 normal-case ">
                    {desc}
                  </p>
                  <span className="testimonial-name mt-6 block font-display text-sm font-medium text-jacarta-700 ">
                    {name}
                  </span>
                  <span className="testimonial-title text-2xs font-medium tracking-tight text-jacarta-400">
                    {title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonial_carousel;