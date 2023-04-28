import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";
import Image from "next/image";
import { Scrollbar } from "swiper";

const Slider = ({
  array = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80",
    "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ],
  height,
}) => {
  return (
    <Swiper
      modules={[Scrollbar]}
      breakpoints={{ 768: { slidesPerView: 3 } }}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      // centeredSlides
      className="w-full h-full pb-10 overflow-hidden bg-white rounded-md"
    >
      {array.map((data, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`h-${height} w-96 cursor-grab active:cursor-grabbing`}
          >
            <Image
              src={data}
              alt="slider images"
              width={1000}
              height={1000}
              className="object-contain w-full h-full rounded-md bg-slate-700"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
