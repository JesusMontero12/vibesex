import { Badge, Container, Image } from "react-bootstrap";
import ProductoCard from "./ProductoCard";

const ProductoCardContainer = ({
  id,
  imagen,
  nombre,
  precio,
  descripcion,
  stock,
  sale,
  descuento,
  categoria,
  tags,
}) => {
  const newNombre = nombre?.substring(0, 13) + "...";
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
  const newDescripcion = descripcion ? (
    descripcion.substring(0, 45) + "..."
  ) : (
    <br />
  );
  const newDescuento = descuento > 0 && (
    <Badge bg="danger" style={{ fontFamily: "arimo", fontSize: "12px" }}>
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
    <ProductoCard
      id={id}
      imagen={imagen}
      nombre={newNombre}
      precio={precioDesc}
      descripcion={newDescripcion}
      stock={stock}
      sale={NewSale}
      descuento={newDescuento}
      categoria={categoria}
      tags={tags}
    />
  );
};

export default ProductoCardContainer;
