import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, prodName, prodImage, price } = props.data;
  const{cartItems, addToCart, removeFromCart,updateCartItemAmount}=useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={prodImage} alt={prodName} />
      <div className="desc">
        <p>
          {" "}
          <b>{prodName}</b>
        </p>
        <p>${price}</p>

        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(e)=>{updateCartItemAmount(Number(e.target.value),id)}}/>
          <button onClick={()=>addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
