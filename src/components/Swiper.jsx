// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styled from "styled-components";
import { Card } from "./Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ category }) => {
  console.log(category);
  return (
    <Container>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {category.map((e) => (
          <SwiperSlide key={e.id}>
            <Card product={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
