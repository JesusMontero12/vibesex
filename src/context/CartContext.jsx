import { updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const message = (msj) => {
    Swal.fire({
      icon: "success",
      title: "¡Genial!",
      text: msj,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ir al carrito",
      timer: "3500",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (exist) {
        updatedCart = prevCart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              cantidad: item.cantidad + (product.cantidad || 1),
            };
          }
          return item;
        });
      } else {
        updatedCart = [
          ...prevCart,
          { ...product, cantidad: product.cantidad || 1 },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      message("El producto se ha añadido correctamente al carrito.");
      return updatedCart;
    });
  };

  const deleteById = (productId) => {
    setCart((prevCart) => {
      const newArray = prevCart
        .map((item) => {
          if (item.id === productId) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        })
        .filter((item) => item.cantidad > 0);
      localStorage.setItem("cart", JSON.stringify(newArray));
      return newArray;
    });
  };
  const clearCart = () => {
    setCart([]);
  };

  const getQuantityById = (id) => {
    let producto = cart.find((item) => item.id === id);
    return producto?.cantidad;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.cantidad * producto.precio;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, producto) => {
      return acc + producto.cantidad;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
