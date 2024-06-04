import { useParams } from "react-router-dom";
import DetalleProducto from "./DetalleProducto";
import { useContext, useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { productos } from "../../../data/productsMock";
import { Badge, Container, Image } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";

const DetalleProductoContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(id);
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

  const onAdd = (cantidad) => {
    let producto = { ...item, cantidad: cantidad };
    addToCart(producto);
  };

  const {
    imagen,
    nombre,
    precio,
    descripcion,
    caracteristicas,
    stock,
    sale,
    descuento,
    categoria,
    tags,
  } = item;

  const precioDesc =
    descuento > 0 ? (
      <span>
        {(precio - (precio / 100) * descuento)
          ?.toLocaleString("es-ES", { minimumFractionDigits: 2 })
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        {"  "}
        <span className="text-secondary text-decoration-line-through">
          {precio
            ?.toLocaleString("es-ES", { minimumFractionDigits: 2 })
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
      </span>
    ) : (
      <span>
        {precio
          ?.toLocaleString("es-ES", { minimumFractionDigits: 2 })
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </span>
    );

  const newDescuento = descuento > 0 && (
    <Badge bg="danger" style={{ fontFamily: "arimo", fontSize: "18px" }}>
      {"-" + descuento + "%"}
    </Badge>
  );

  const NewSale = descuento > 0 && (
    <Container fluid>
      <span
        className="position-absolute text-light"
        style={{
          fontFamily: "montserrat",
          fontWeight: "600",
          fontSize: "15px",
          margin: "19px 10px",
        }}
      >
        SALE
      </span>
      <Image
        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716861681/proyects/VibeSex/icons/chat_10372328_lpxbxk.png"
        rounded
      />
    </Container>
  );

  return (
    <DetalleProducto
      id={id}
      imagen={imagen}
      nombre={nombre}
      precio={precioDesc}
      descripcion={descripcion}
      caracteristicas={caracteristicas}
      stock={stock}
      sale={NewSale}
      descuento={newDescuento}
      categoria={categoria}
      tags={tags}
      item={item}
      onAdd={onAdd}
      initial={initial}
    />
  );
};

export default DetalleProductoContainer;
