import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, prodName, price, prodImage } = props.data;
  const{addToCart, cartItems}=useContext(ShopContext);
  
  const cartItemAmount=cartItems[id];

  return (
    <div className="prod_card" id={id}>
      <img className="prod_img" src={prodImage} alt={prodName} />
      <div className="prod_desc">
        <h1 className="prod_name">{prodName}</h1>
        <p className="prod_price">
          <b> ${price} </b>
        </p>
      </div>
      <button className="addToCartBtn" onClick={()=>addToCart(id)}>
        Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );
};  