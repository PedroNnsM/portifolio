import { Swiper, SwiperProps } from "swiper/react";
import { ReactNode } from "react";
import { Navigation, Pagination, A11y, EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCards]}
      {...settings}
      className="w-full px-[50px] pb-[50px]" // Classe do swiper
    >
      {children}
    </Swiper>
  );
}

// Exemplos de uso:
const slides = [
  <div
    className="flex justify-center items-center w-full h-[250px] bg-blue-600 rounded-[10px] shadow-[0px_15px_30px_rgba(0,0,0,0.5)] hover:shadow-[0px_15px_30px_rgba(0,0,0,0.6)] hover:bg-[#024873]"
    key={1}
  >
    <p className="text-left text-white">Slide 1</p>
  </div>,
  <div className="...">Slide 2</div>,
];
