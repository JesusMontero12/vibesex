import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";

const DetalleProducto = ({
  id,
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
  item,
  onAdd,
  initial,
}) => {
  return (
    <>
      {item.id ? (
        <Container fluid className="my-5" key={id}>
          <Card style={{ border: "none" }}>
            <Row>
              <Col sm={4}>
                <span className="position-absolute">{sale}</span>
                <Card.Img
                  className="d-block w-100 object-fit-cover"
                  variant="top"
                  src={imagen && imagen[0]}
                  style={{
                    width: "25rem",
                    height: "25rem",
                  }}
                />
              </Col>
              <Col sm={8}>
                <Card.Body>
                  <Card.Title
                    className="text-left"
                    style={{ fontfamily: "arimo", fontSize: "2.5rem" }}
                  >
                    <span>
                      {nombre}
                      {"  "}
                      {descuento}
                    </span>
                  </Card.Title>
                  <Card.Text
                    style={{ fontWeight: "600" }}
                    className="fs-6 m-0 p-0 text-dark"
                  >
                    <span>PRECIO: </span>
                    {precio}
                  </Card.Text>
                  <CounterContainer
                    stock={item.stock}
                    onAdd={onAdd}
                    initial={initial}
                  />
                  <Card.Text
                    className="text-left"
                    style={{
                      fontfamily: "arimo",
                      fontSize: "1rem",
                      maxHeight: "400px",
                      overflowY: "auto",
                    }}
                  >
                    <br />
                    <span style={{ fontFamily: "arimo", fontWeight: "600" }}>
                      DESCRIPCIÓN:
                    </span>
                    <br />
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      {descripcion}
                    </span>
                    <br />
                    <br />
                    <span
                      style={{
                        fontFamily: "arimo",
                        fontWeight: "600",
                      }}
                    >
                      CARACTERÍSTICAS:
                    </span>
                    <br />
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      {caracteristicas}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : (
        <h1>aqui un skeleton o loader</h1>
      )}
    </>
  );
};

export default DetalleProducto;
