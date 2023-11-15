import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  REQUEST,
  FILTER_PRODUCT,
} from "../type/product.type.actions";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: REQUEST,
  });
  const URL = "https://fakestoreapi.com/products";
  try {
    const response = await axios.get(URL);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {}
};

export const fetchProduct = (id) => async (dispatch) => {
  dispatch({
    type: REQUEST,
  });
  const URL = `https://fakestoreapi.com/products/${id}`;
  try {
    const response = await axios.get(URL);
    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data,
    });
  } catch (error) {}
};

export const filterProduct = (data) => (dispatch) => {
  dispatch({
    type: REQUEST,
  });
  dispatch({
    type: FILTER_PRODUCT,
    payload: data,
  });
};
