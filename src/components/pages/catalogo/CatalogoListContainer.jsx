import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import CatalogoList from "./CatalogoList";
import { collection, getDoc } from "firebase/firestore";
import { productos } from "../../../data/productsMock";
import { useParams } from "react-router-dom";

const CatalogoListContainer = () => {
  const { name } = useParams([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productsFiltered = productos.filter((product) =>
      product.categoria.includes(name)
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(name ? productsFiltered : productos);
      } else {
        reject({ status: 400, message: "no estas autorizado" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name, productos]);

  return <CatalogoList items={items} error={error} />;
};

export default CatalogoListContainer;
