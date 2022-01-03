// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://images.squarespace-cdn.com/content/v1/5a442f6a64b05f1c833e4650/1593623099356-K2PX11UIGNG65665MFGL/image-asset.jpeg" alt="Squarespace-cdn.com" style="width:625px;height:417px;"></SwiperSlide>
      <SwiperSlide><img src="fish.png" alt="fish" style="width:597px;height:417px;"></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};