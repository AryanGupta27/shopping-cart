import React from "react";

export const Product = (props) => {
  const { id, title,description, price, thumbnail } = props.data;
  return (
    <div className="prod_card" id={id}>
      <img className="prod_img" src={thumbnail} alt={title} />
      <h1 className="prod_name">{title}</h1>
      <p className="desc">{description}</p>
      <p className="prod_price">{price}</p>
    </div>
  );
};
