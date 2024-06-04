import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import CarritoContainer from "./CarritoContainer";

const Carrito = ({ cart, deleteById, totalPrice, totalProd }) => {
  return (
    <Container fluid>
      <Container fluid>
        <Row className="p-5 my-5">
          <Col sm={9} className="p-2">
            <Card>
              <Card.Header as="h5" className="text-center">
                Productos del carrito
              </Card.Header>
              <Card.Body>
                {cart.length > 0 ? (
                  cart.map(
                    ({
                      id,
                      imagen,
                      nombre,
                      precio,
                      descripcion,
                      cantidad,
                      caracteristicas,
                      descuento,
                    }) => (
                      <Card key={id} className="">
                        <Row>
                          <Col
                            xs={12}
                            sm={2}
                            md={2}
                            lg={3}
                            xl={3}
                            xxl={3}
                            className="m-0 p-0"
                          >
                            {descuento > 0 && (
                              <Container fluid className="position-absolute ">
                                <span
                                  className="position-absolute text-light"
                                  style={{
                                    fontFamily: "montserrat",
                                    fontWeight: "600",
                                    fontSize: "8px",
                                    margin: "10px 6px",
                                  }}
                                >
                                  SALE
                                </span>
                                <Image
                                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716861681/proyects/VibeSex/icons/chat_10372328_lpxbxk.png"
                                  style={{ width: "2rem", height: "2rem" }}
                                  rounded
                                />
                              </Container>
                            )}
                            <Card.Img
                              className="object-fit-cover"
                              src={imagen && imagen[0]}
                              style={{
                                width: "100%",
                                height: "100px",
                              }}
                            />
                          </Col>
                          <Col
                            xs={11}
                            sm={6}
                            md={8}
                            lg={7}
                            xl={8}
                            xxl={8}
                            className="m-0 p-0"
                          >
                            <Card.Body className="bg-danger">
                              <Card.Title>
                                <Row>
                                  <Col xs={12} md={12} lg={11}>
                                    <h1
                                      style={{
                                        fontWeight: "600",
                                        fontSize: "1rem",
                                      }}
                                    >
                                      {nombre}{" "}
                                      {descuento > 0 && (
                                        <Badge
                                          bg="danger"
                                          style={{
                                            fontFamily: "arimo",
                                            fontSize: "1rem",
                                          }}
                                        >
                                          {"-" + descuento + "%"}
                                        </Badge>
                                      )}
                                    </h1>
                                  </Col>
                                </Row>
                              </Card.Title>
                              <ListGroup className="list-group-flush">
                                <ListGroup.Item className="p-0 m-0 border-0 ">
                                  {descuento > 0 ? (
                                    <span
                                      style={{
                                        fontWeight: "600",
                                        fontSize: "1rem",
                                        fontFamily: "arimo",
                                      }}
                                    >
                                      {(precio - (precio / 100) * descuento)
                                        ?.toLocaleString("es-ES", {
                                          minimumFractionDigits: 2,
                                        })
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                      {"  "}
                                      <span
                                        style={{
                                          fontWeight: "600",
                                          fontSize: "1rem",
                                          fontFamily: "arimo",
                                        }}
                                        className="text-secondary text-decoration-line-through"
                                      >
                                        {precio
                                          ?.toLocaleString("es-ES", {
                                            minimumFractionDigits: 2,
                                          })
                                          .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            "."
                                          )}
                                      </span>
                                    </span>
                                  ) : (
                                    <span
                                      style={{
                                        fontWeight: "600",
                                        fontSize: "1rem",
                                        fontFamily: "arimo",
                                      }}
                                    >
                                      {precio
                                        ?.toLocaleString("es-ES", {
                                          minimumFractionDigits: 2,
                                        })
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </span>
                                  )}
                                </ListGroup.Item>
                                <ListGroup.Item
                                  style={{
                                    fontWeight: "600",
                                    fontFamily: "arimo",
                                  }}
                                  className="p-0 m-0 border-0"
                                >
                                  Cantidad: <span>{cantidad}</span>
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Col>
                          <Col
                            xs={10}
                            sm={1}
                            md={2}
                            lg={2}
                            xl={1}
                            xxl={1}
                            className="m-0 p-0"
                          >
                            <Card.Body>
                              <Button
                                variant="link"
                                className="text-decoration-none text-secondary mt-2 fs-4"
                                onClick={() => deleteById(id)}
                              >
                                &#120;
                              </Button>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    )
                  )
                ) : (
                  <h1 className="text-center">El carrito está vacío.</h1>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3} className=" p-2">
            {cart.length > 0 && (
              <Card>
                <Card.Header as="h5" className="text-center">
                  Detalle
                </Card.Header>
                <Card.Body> total:{1}</Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Carrito;
