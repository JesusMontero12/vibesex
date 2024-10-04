import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import CarritoContainer from "./CarritoContainer";
import { Link } from "react-router-dom";

const Carrito = ({ cart, deleteById, totalPrice, totalProd }) => {
  let descExt;
  return (
    <Container fluid>
      <Container fluid>
        {cart.length > 0 ? (
          <Row className="p-3 my-3">
            <Col sm={9} className="p-2">
              <Card>
                <Card.Header as="h5" className="text-center">
                  Productos del carrito
                </Card.Header>
                <Card.Body style={{ maxHeight: "500px", overflow: "scroll" }}>
                  {cart.map(
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
                      <Card key={id} className="m-2">
                        <Row>
                          <Col
                            xs={11}
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
                              className="object-fit-cover mx-3 my-1"
                              src={imagen && imagen[0]}
                              style={{
                                width: "100%",
                                height: "115px",
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
                            className="m-0 px-2"
                          >
                            <Card.Body>
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
                            xs={11}
                            sm={1}
                            md={2}
                            lg={2}
                            xl={1}
                            xxl={1}
                            className="m-0 p-0"
                          >
                            <Card.Body className="text-center">
                              <Button
                                variant="link"
                                className="text-decoration-none  text-secondary mt-2 fs-4"
                                onClick={() => deleteById(id)}
                              >
                                &#120;
                              </Button>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    )
                  )}
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3} className=" p-2">
              <Card>
                <Card.Header as="h5" className="text-center">
                  Detalle
                </Card.Header>
                <Card.Body>
                  <Card.Text className="text-center">
                    <p>Tienes {totalProd} producto(s) agregado(s) al carrito</p>
                  </Card.Text>
                  <Card.Text
                    style={{
                      marginTop: "100px",
                      fontWeight: "600",
                      fontFamily: "arimo",
                    }}
                  >
                    <p className="d-flex m-0 p-0 justify-content-between">
                      <p>Subtotal: </p>
                      <span className="text-right">
                        {totalPrice
                          ?.toLocaleString("es-ES", {
                            minimumFractionDigits: 2,
                          })
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                    </p>
                    <p className="d-flex m-0 p-0 justify-content-between">
                      <p>Envio: </p>
                      <span className="text-right pb-5">
                        <DropdownButton
                          as={ButtonGroup}
                          id="dropdown-autoclose-true"
                          variant="dark"
                          title="Tipo de envío"
                        >
                          <Dropdown.Item
                            eventKey="1"
                            style={{ fontWeight: "600", fontFamily: "Arimo" }}
                          >
                            Envío Exprés: <span>$ 3.990</span>
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="2"
                            style={{ fontWeight: "600", fontFamily: "Arimo" }}
                          >
                            Envío estándar 24-72 h: <span>$ 2.990</span>
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="3"
                            style={{ fontWeight: "600", fontFamily: "Arimo" }}
                          >
                            Chilexpress oficina envío por pagar
                          </Dropdown.Item>
                        </DropdownButton>
                      </span>
                    </p>
                    <p className="d-flex m-0 p-0 justify-content-between">
                      <p>Descuento extra: </p>
                      <span className="text-right">
                        {(descExt = totalPrice > 100000 ? 2500 : 0)
                          .toLocaleString("es-ES", {
                            minimumFractionDigits: 2,
                          })
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                    </p>
                    <p className="d-flex m-0 p-0 justify-content-between">
                      <p>Total: </p>
                      <span>
                        {(totalPrice - descExt)
                          .toLocaleString("es-ES", {
                            minimumFractionDigits: 2,
                          })
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                    </p>
                  </Card.Text>
                </Card.Body>
                <Link
                  to="/checkout"
                  className="bg-dark text-white text-center text-decoration-none  p-2"
                >
                  Ir a pagar
                </Link>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className="p-5 my-5">
            <Col sm={12} className="p-2">
              <Card>
                <Card.Header as="h5" className="text-center">
                  Productos del carrito
                </Card.Header>
                <Card.Body>
                  <h1 className="text-center">El carrito está vacío.</h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default Carrito;
