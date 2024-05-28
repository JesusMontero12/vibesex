import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleProducto = ({ item }) => {
  const { nombre, imagen, precio, descripcion, caracteristicas } = item;
  return (
    <Container className="m-5 p-5" key={item?.id}>
      <Card>
        <Row>
          <Col sm={4}>
            <Card.Img
              className="d-block w-100"
              variant="top"
              src={imagen && imagen[0]}
              style={{
                  width: "25rem", height: "25rem",
                  objectFit: "cover",
                  display: "block",
                }}
            />
          </Col>
          <Col sm={8}>
            <Card.Body>
              <Card.Title className="fs-2">{nombre}</Card.Title>
              <Card.Text
                style={{ fontWeight: "600" }}
                className="fs-6 m-0 p-0 text-dark"
              >
                <span>PRECIO: </span>
                {precio
                  ?.toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                  })
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </Card.Text>
              <Card.Text
                className="fs-6 mt-3 p-0 text-secondary"
                style={{ maxHeight: "400px", overflowY: "auto" }}
              >
                <span style={{ fontFamily: "arimo", fontWeight: "600" }}>
                  DESCRIPCIÓN:
                </span>
                <br />
                <span>{descripcion}</span>
                <br />
                <span style={{ fontFamily: "arimo", fontWeight: "600" }}>
                  CARACTERÍSTICAS:
                </span>
                <br />
                <span>{caracteristicas}</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
