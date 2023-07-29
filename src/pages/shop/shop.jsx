import React, { useEffect, useState } from "react";
import "./card.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
export const Shop = () => {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products?limit=10";
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setProducts(data.products);
    };
    fetchData();
  }, []);
  
  console.log(products);

  return (
    <div className="shop">
      <div className="title">
        <h1>Aryan Shop</h1>
      </div>
      <div className="products">
        {products.map((product, i) => (
          <Product key={i} data={product} />
        ))}
      </div>
    </div>
  );
};
