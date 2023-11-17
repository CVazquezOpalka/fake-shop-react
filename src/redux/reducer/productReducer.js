import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FILTER_PRODUCT,
  REQUEST,
  UPDATE_DETAIL,
  SWIPER_PRODUCT,
} from "../type/product.type.actions";

const initialState = {
  products: [],
  filterProducts: [],
  swiper: [],
  product: {},
  isLoading: false,
  swiperLoading: true,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case SWIPER_PRODUCT:
      const swiperState = state.products.filter((e) => e.category === payload);
      return {
        ...state,
        swiper: swiperState,
        swiperLoading: false,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: payload,
        isLoading: false,
      };
    case UPDATE_DETAIL:
      return {
        ...state,
        product: {},
      };
    case FILTER_PRODUCT:
      if (payload.trim() !== "") {
        let filterState = state.products.filter((e) => e.category == payload);
        return {
          ...state,
          filterProducts: filterState,
          isLoading: false,
        };
      } else {
        return {
          ...state,
          filterProducts: [...state.products],
          isLoading: false,
        };
      }
    default:
      return state;
  }
};
