import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleProducto = ({ item }) => {
  return (
    <Container className="m-5 p-5">
      <Row>
        <Col sm={4}>
          <Card.Img src={item.imagen} />
        </Col>
        <Col sm={8}>
          <Card.Body>
            <Card.Title className="fs-2">{item.nombre}</Card.Title>
            <Card.Text>
              <p style={{ fontFamily: "arimo", fontWeight: "600" }}>
                PRECIO:
                <span> {item.precio}</span>
              </p>
            </Card.Text>
            <Card.Text
              className=""
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              <p style={{ fontFamily: "arimo", fontWeight: "600" }}>
                DESCRIPCIÓN:
              </p>
              <p>{item.descripcion}</p>
              <p style={{ fontFamily: "arimo", fontWeight: "600" }}>
                CARACTERÍSTICAS:
              </p>
              <p>{item.caracteristicas}</p>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
