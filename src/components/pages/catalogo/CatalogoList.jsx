import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";
import { productos } from "../../../data/productsMock";
import { Link } from "react-router-dom";
import ProductoCardContainer from "../../common/productoCard/ProductoCardContainer";

const CatalogoList = ({ items, error }) => {
  return (
    <>
      <Container fluid className="m-0 p-0 bg-secondary">
        <p className="text-center p-2 text-center text-light">
          ¡Próximamente lanzaremos nuestra plataforma de compras en línea para
          que puedas acceder a nuestros productos desde la comodidad de tu
          hogar! ¡Prepárate para una experiencia de compra fácil y conveniente!
        </p>
      </Container>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0 ">
          <Col sx={5} sm={3} md={3} lg={3} xl={2} xxl={2}>
            <p className="text-center m-5 fw-bold text-secondary">CATEGORÍAS</p>
            <Container fluid>
              <Row>
                <Col className="d-flex flex-row justify-content-center text-center">
                  <Link
                    to={`/filtros/paraambos`}
                    className="text-decoration-none"
                  >
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/simbolos-masculinos-y-femeninos_op7uya.png"
                        />
                        <Card.Text
                          className="text-center text-secondary pt-2"
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
                <Col className="d-flex flex-row justify-content-center text-center">
                  <Link to={`/filtros/hombre`} className="text-decoration-none">
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/genero-masculino_q9iixw.png"
                        />
                        <Card.Text
                          className="text-center text-secondary pt-2"
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
                <Col className="d-flex flex-row justify-content-center text-center">
                  <Link to={`/filtros/mujer`} className="text-decoration-none">
                    <Card style={{ width: "6rem", height: "6rem" }}>
                      <Card.Body>
                        <Card.Img
                          style={{ width: "30px", height: "30px" }}
                          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716765521/proyects/VibeSex/icons/hembra_gycft2.png"
                        />
                        <Card.Text
                          className="text-center text-secondary pt-2"
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
                {items.map(
                  ({
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
                      <Col
                        key={id}
                        className="d-flex flex-row justify-content-center"
                      >
                        <ProductoCardContainer
                          id={id}
                          imagen={imagen}
                          nombre={nombre}
                          precio={precio}
                          descripcion={descripcion}
                          stock={stock}
                          sale={sale}
                          descuento={descuento}
                          categoria={categoria}
                          tags={tags}
                        />
                      </Col>
                    );
                  }
                )}
                {/* {items.length > 0 ? (
                  items.map(
                    ({
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
                        <Col
                          key={id}
                          className="d-flex flex-row justify-content-center"
                        >
                          <ProductoCardContainer
                            id={id}
                            imagen={imagen}
                            nombre={nombre}
                            precio={precio}
                            descripcion={descripcion}
                            stock={stock}
                            sale={sale}
                            descuento={descuento}
                            categoria={categoria}
                            tags={tags}
                          />
                        </Col>
                      );
                    }
                  )
                ) : (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={8} />
                      </Placeholder>
                      <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                  </Card>
                )} */}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CatalogoList;
