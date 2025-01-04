import { Swiper,SwiperProps } from 'swiper/react';
import { ReactNode } from 'react';
import { Navigation, Pagination, A11y, EffectCards } from 'swiper';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps{
  settings: SwiperProps;
  children: ReactNode;
}

export function Slider({ settings, children}: SliderProps) {
    return (
      <Swiper modules={[Navigation, Pagination, A11y, EffectCards]}{...settings} >
        {children} 
      </Swiper>
  
    )
}