import { useParams } from "react-router-dom";
import DetalleProducto from "./DetalleProducto";
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { productos } from "../../../data/productsMock";

const DetalleProductoContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [error, setError] = useState();
  //   useEffect(() => {
  //     const productcolection = collection(db, "products");
  //     const refDoc = doc(productcolection, id);
  //     getDoc(refDoc).then((res) => {
  //       setItem({ id: res.id, ...res.data() });
  //     });
  //   }, [id]);

  useEffect(() => {
    let itemEncontrado = productos.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });

    getProduct.then((res) => setItem(res)).catch((error) => setError);
  }, [id]);

  return <DetalleProducto item={item} />;
};

export default DetalleProductoContainer;
