import React from "react";
import "../cart-item/cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alit="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="name">
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
