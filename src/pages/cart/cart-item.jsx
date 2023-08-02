import React from 'react'

export const CartItem = (props) => {
    const{id,prodName,prodImage,price}=props.data;
  return (
    <div className="cartItem">
        <img src={prodImage} />
        <div className="desc">
             <p> <b>{prodName}</b></p>
             <p>${price}</p>
        </div>
    </div>
  )
}
