import React, { useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import "./ProductInfo.css";
import ProductsPage from "../ProductsPage/ProductsPage";

export const ProductInfoData = createContext(null);

function ProductInfo() {
  const { idx } = useParams();
  const products = useContext(DataContext);

  const product = products[idx];
  const productData = {
    id: product.id,
    name: product.name,
    description:
      "Цей продукт вирощений без використання консервантів, ГМО та інших шкідливих речовин, які можуть зашкодити організму людини. Дозволено для споживання дітям від 2-х років.",
  };

  return (
    <ProductInfoData.Provider value={productData}>
      <ProductsPage />
    </ProductInfoData.Provider>
  );
}

export default ProductInfo;
