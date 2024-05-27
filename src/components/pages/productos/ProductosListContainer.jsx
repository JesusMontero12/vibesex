import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Productos from "./Productos.jsx";
import Swal from "sweetalert2";

const ProductosListContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [modificar, setModificar] = useState({});
  const [formData, setFormData] = useState({
    categoria: "",
    tags: "",
    imagen: "",
  });
  const [dataArrays, setDataArrays] = useState({
    categoria: [],
    tags: [],
    imagen: [],
  });
  const [info, setInfo] = useState({
    imagen: [],
    nombre: "",
    precioCosto: "",
    precio: "",
    descripcion: "",
    caracteristicas: "",
    sale: false,
    descuento: "",
    stock: "",
    categoria: [],
    tags: [],
  });

  // MANEJO DE CAMBIOS EN LOS INPUTS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const transformarInput = (e) => {
    const { name, value } = e.target;
    const datosArray = value.split(",").map((item) => item.trim());
    setDataArrays((prevState) => ({
      ...prevState,
      [name]: datosArray,
    }));
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: datosArray,
    }));
  };

  // HABILITA LOS COMPOS DE LA TABLA PARA MODIFICAR LOS VALORES
  const toggleModificar = (id) => {
    setModificar((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const messageDelete = (id, titulo, msj, imgurl) => {
    Swal.fire({
      title: titulo,
      text: msj,
      imageUrl: imgurl,
      imageHeight: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // ELIMINA EL PRODUCTO
        const productoRef = doc(db, "productos", id);
        deleteDoc(productoRef);

        const newArray = items.filter((product) => product.id !== id);
        setItems(newArray);

        Swal.fire({
          title: "¡Eliminado!",
          text: "El producto ha sido eliminado con éxito.",
          icon: "success",
        });
      }
    });
  };

  const messageProdAdd = (titulo, msj) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: titulo,
      text: msj,
      showConfirmButton: true,
    });
  };

  // ESCUCHA LOS CAMBIOS DE LOS INPUTS Y LOS SETEA EN EL OBJETO INFO
  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // CHECK VALIDA SI ES TRUE O FALSE SI EL PRODUCTO TIENE SALE O NO
  const handleChangeSale = (e) => {
    const { name, checked } = e.target;
    setInfo({
      ...info,
      [name]: checked,
    });
  };

  // REGISTRA EL OBJETO ITEMS EN LA COLLECTION PRODUCTOS
  const handleSubmit = (e) => {
    e.preventDefault();

    const productsCollection = collection(db, "productos");
    addDoc(productsCollection, info)
      .then((res) => {
        setInfo(res.id);
        messageProdAdd(
          "¡Genial!",
          "Tu producto se agregó a la colección correctamente."
        );
        // llamar funcion para vaciar el formulario
      })
      .catch((error) => console.log(error));
  };

  // ELIMINA LOS PRODUCTOS DE LA COLLECTION PRODUCTOS
  const deleteById = (id, imgurl) => {
    messageDelete(id, "¡Espera!", "¿Quieres eliminar este producto?", imgurl);
  };

  useEffect(() => {
    const productsCollection = collection(db, "productos");
    let consulta = productsCollection;
    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newArray);
      })
      .catch((error) => {
        setError(error);
      });

    const promiseTimer = () => {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    };

    if (isLoading) {
      promiseTimer().then(() => {
        setIsLoading(false);
      });
    }
  }, [items]);
  
  const handleClick = () => setIsLoading(true);

  return (
    <Productos
      items={items}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleChangeSale={handleChangeSale}
      deleteById={deleteById}
      modificar={modificar}
      toggleModificar={toggleModificar}
      formData={formData}
      handleInputChange={handleInputChange}
      transformarInput={transformarInput}
      handleClick={handleClick}
      isLoading={isLoading}
    />
  );
};

export default ProductosListContainer;
