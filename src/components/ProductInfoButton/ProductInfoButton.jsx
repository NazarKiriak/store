import React from "react";
import { Link } from "react-router-dom";
import "./ProductInfoButton.css";
export default function ProductInfoButton({ idx, name }) {
  const path = `/productInfo/${idx}`;

  return (
    <Link to={path}>
      <button className="product-info-button">Детальний опис товару</button>
    </Link>
  );
}
