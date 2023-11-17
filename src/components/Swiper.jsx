// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* Styles */
import styled from "styled-components";
/* Componentes */
import { Card } from "./Card";
/* Hooks */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
/* Function para filtrar el swiper */
import { swiperProduct } from "../redux/actions/product.actions";

export default ({ category }) => {
  /* Estados de Redux */
  const swiper = useSelector((state) => state.product.swiper);
  const loading = useSelector((state) => state.product.swiperLoading);
  /* Hooks */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(swiperProduct(category));
  }, [category]);
  /* Render */
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
        {!loading
          ? swiper.map((e) => (
              <SwiperSlide key={e.id}>
                <Card product={e} />
              </SwiperSlide>
            ))
          : null}
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
