import { useContext, useEffect, useState } from "react";
import Carrito from "./Carrito";
import { CartContext } from "../../../context/CartContext.jsx";

const CarritoContainer = () => {
  const { cart, deleteById, getTotalPrice, getTotalItems } =
    useContext(CartContext);
  let totalProd = getTotalItems();
  let totalPrice = getTotalPrice();

  return (
    <Carrito
      cart={cart}
      deleteById={deleteById}
      totalPrice={totalPrice}
      totalProd={totalProd}
    />
  );
};

export default CarritoContainer;
