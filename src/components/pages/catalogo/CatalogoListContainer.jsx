import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import CatalogoList from "./CatalogoList";
import { collection, getDoc } from "firebase/firestore";
import { productos } from "../../../data/productsMock";

const CatalogoListContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
  //   const [items, setItems] = useState({});

    useEffect(() => {
        const promiseTimer = () =>{
            return new Promise((resolve) => setTimeout(resolve,2000))
        }
        
        if (isLoading) {
            promiseTimer().then(() => {
                setIsLoading(false)
            })
        }

  //     const productosCollecion = collection(db, "productos");
  //     let consulta = productosCollecion;
  //     getDoc(consulta).then((res) => {
  //       let newArray = res.doc.map((doc) => {
  //         return { id: doc.id, ...doc.data() };
  //       });
  //       setItems(newArray);
  //     });
    }, [isLoading]);

    const handleClick = () => setIsLoading(true);

  return <CatalogoList handleClick={handleClick} isLoading={isLoading} />;
};

export default CatalogoListContainer;
