import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../components/helpers/consts";

export const productsContext = createContext();

export const useProducts = () => {
  return useContext(productsContext);
};

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! POST (CREATE)
  const addProduct = async (newProduct) => {
    try {
      await axios.post(JSON_API_PRODUCTS, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  let values = {
    addProduct,
    getProduct,
    products: state.products,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
