import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { productos } from "../../../data/productsMock";
import { Link } from "react-router-dom";

const CatalogoList = () => {
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0 ">
          <Col sx={5} sm={3} md={3} lg={3} xl={2} xxl={2}>
            <p className="text-center m-5 fw-bold text-secondary">CATEGORÍAS</p>
            <Container fluid>
              <Row>
                <Col className="d-flex flex-row justify-content-center">
                  <Link
                    to={`/categoria/paraambos`}
                    className="text-decoration-none"
                  >
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/simbolos-masculinos-y-femeninos_op7uya.png"
                        />
                        <Card.Text
                          className="text-center text-secondary "
                          style={{
                            fontSize: "10px",
                            fontWeight: "600",
                          }}
                        >
                          Unisex
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col className="d-flex flex-row justify-content-center">
                  <Link
                    to={`/categoria/hombre`}
                    className="text-decoration-none"
                  >
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/genero-masculino_q9iixw.png"
                        />
                        <Card.Text
                          className="text-center text-secondary "
                          style={{
                            fontSize: "10px",
                            fontWeight: "600",
                          }}
                        >
                          Hombres
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <Col className="d-flex flex-row justify-content-center">
                  <Link
                    to={`/categoria/mujer`}
                    className="text-decoration-none"
                  >
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/hembra_gycft2.png"
                        />
                        <Card.Text
                          className="text-center text-secondary "
                          style={{
                            fontSize: "10px",
                            fontWeight: "600",
                          }}
                        >
                          Mujeres
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sx={7} sm={9} md={9} lg={9} xl={10} xxl={10}>
            <p className="text-center m-5 fw-bold text-secondary">
              Resultados: Productos del catálogo.
            </p>
            <Container fluid>
              <Row>
                {productos.map(
                  ({ id, imagen, nombre, precio, descripcion }) => {
                    return (
                      <Col
                        key={id}
                        className="d-flex flex-row justify-content-center"
                      >
                        <Card
                          className="m-1"
                          style={{
                            width: "15rem",
                            height: "25rem",
                            border: "none",
                            fontFamily: "arimo",
                          }}
                        >
                          <Carousel data-bs-theme="secondary">
                            <Carousel.Item>
                              <Card.Img
                                variant="top"
                                src={imagen[0]}
                                style={{ width: "15rem", height: "15rem" }}
                              />
                            </Carousel.Item>
                          </Carousel>
                          <Card.Body className="m-0 p-0">
                            <Card.Title
                              style={{ fontWeight: "600" }}
                              className="fs-6 m-1 text-dark"
                            >
                              {nombre.substring(0, 18) + "..."}
                            </Card.Title>
                            <Card.Text className="fs-6 m-0 p-0 text-secondary">
                              {descripcion ? (
                                descripcion.substring(0, 22) + "..."
                              ) : (
                                <br />
                              )}
                            </Card.Text>
                            <Card.Text
                              style={{ fontWeight: "600" }}
                              className="fs-6 m-0 p-0 text-dark"
                            >
                              {precio
                                .toLocaleString("es-ES", {
                                  minimumFractionDigits: 2,
                                })
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </Card.Text>
                          </Card.Body>
                          <Card.Body className="text-center">
                            <Link
                              style={{}}
                              className="bg-dark p-2 rounded text-decoration-none link-light"
                              to={"/detalleCatalogo"}
                            >
                              Ver producto
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  }
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CatalogoList;
