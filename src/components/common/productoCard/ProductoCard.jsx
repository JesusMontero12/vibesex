import { Badge, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductoCard = ({
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
  return (
    <Card
      className="m-1 d-flex flex-column"
      style={{
        width: "15rem",
        height: "25rem",
        border: "none",
        fontFamily: "arimo",
      }}
    >
      <Carousel
        slide={false}
        interval={null}
        indicators={false}
        controls={imagen?.length > 1}
        data-bs-theme="dark"
      >
        {imagen?.map(
          (
            src,
            index // Corregido el uso de map
          ) => (
            <Carousel.Item
              key={index}
              style={{ width: "15rem", height: "15rem" }}
            >
              <span className="position-absolute">{sale}</span>
              <Card.Img
                variant="top"
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Carousel.Item>
          )
        )}
      </Carousel>

      <Card.Body className="m-0 p-0">
        <Card.Title
          style={{ fontWeight: "600", fontFamily: "arimo", fontSize: "18px" }}
          className="my-1 text-dark"
        >
          <span>
            {nombre}
            {"  "}
            {descuento}
          </span>
        </Card.Title>
        <Card.Text
          className="fs-6 m-0 p-0 text-secondary text-left"
          style={{ fontFamily: "arimo", fontSize: "1rem" }}
        >
          {descripcion}
        </Card.Text>
        <Card.Text
          style={{
            fontWeight: "600",
            fontFamily: "montserrat",
            fontSize: "1rem",
          }}
          className="m-0 p-0 text-dark"
        >
          {precio}
        </Card.Text>
      </Card.Body>
      <Card.Body className="text-center">
        <Link
          style={{ cursor: "pointer" }}
          className="bg-dark p-2 rounded text-decoration-none link-light"
          to={`/detalleProducto/${id}`}
        >
          Ver producto
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductoCard;
