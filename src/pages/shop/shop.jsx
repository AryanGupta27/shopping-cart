import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
export const Shop = () => {
  // const [products, setProducts] = useState([]);

  // const url = "https://dummyjson.com/products?limit=8";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // console.log(data);
  //     setProducts(data.products);
  //   };
  //   fetchData();
  // }, []);
  
  // console.log(products);

  return (
    <div className="shop">
      <div className="title">
        <h1 className="shopTitle">Aryan Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
