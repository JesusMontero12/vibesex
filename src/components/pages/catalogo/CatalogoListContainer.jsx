import CatalogoList from "./CatalogoList";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const CatalogoListContainer = () => {
   const { name } = useParams();
   const [items, setItems] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {

     const productsCollection = collection(db, "productos");
     let consulta = productsCollection;

     if (name) {
       consulta = query(
         productsCollection,
         where("categoria", "array-contains", name)
       );
     }

     getDocs(consulta)
       .then((res) => {
         let newArray = res.docs.map((doc) => {
           return { id: doc.id, ...doc.data() };
         });
         setItems(newArray);
       })
       .catch((error) => {
         console.error("Error al obtener productos:", error);
         setError(error.message); // Guarda el mensaje de error
       });
   }, [name]);

  return <CatalogoList items={items} error={error} />;
};

export default CatalogoListContainer;
