import {
  Col,
  Nav,
  Row,
  Tab,
  Form,
  Button,
  FloatingLabel,
  Table,
  Image,
  Container,
} from "react-bootstrap";
import { productos } from "../../../data/productsMock";

const Productos = ({
  items,
  error,
  handleSubmit,
  handleChange,
  handleChangeSale,
  deleteById,
  toggleModificar,
  modificar,
  formData,
  handleInputChange,
  transformarInput,
}) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="VerProductos">
      <Row style={{ width: "100%" }}>
        <Col sm={3} className="p-0" style={{ width: "15rem" }}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="VerProductos" className="m-0 p-3 text-center">
                Ver
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="NuevoProducto"
                className="m-0 p-3 text-center"
              >
                Nuevo
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          {/* TODOS LOS TABS */}
          <Tab.Content>
            {/* CONTENIDO DEL TAB DE VER */}
            <Tab.Pane eventKey="VerProductos">
              <Row className="mb-3 m-4">
                <h1 className="mb-3 p-2 text-center">Todos los productos</h1>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>IMAGEN</th>
                      <th>NOMBRE</th>
                      <th>PRECIO</th>
                      <th>DESCRIPCIÓN</th>
                      <th>CARACTERÍSTICAS</th>
                      <th>SALE</th>
                      <th>DESCUENTO</th>
                      <th>STOCK</th>
                      <th>CATEGORÍA</th>
                      <th>TAGS</th>
                      <th>ACCIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map(
                      ({
                        id,
                        imagen,
                        nombre,
                        precio,
                        descripcion,
                        caracteristicas,
                        sale,
                        descuento,
                        stock,
                        categoria,
                        tags,
                      }) => {
                        return (
                          <tr key={id}>
                            <td>{id.substring(0, 2) + "..."}</td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="imagen"
                                  type="text"
                                  placeholder={imagen}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                <Row>
                                  <Col xs={6} md={4}>
                                    <Image
                                      style={{ width: "4rem", height: "4rem" }}
                                      src={imagen && imagen[0]}
                                      rounded
                                    />
                                  </Col>
                                </Row>
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="nombre"
                                  type="text"
                                  placeholder={nombre}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                nombre?.substring(0, 12) + "..."
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="precio"
                                  type="text"
                                  placeholder={precio}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                precio
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="descripcion"
                                  type="text"
                                  placeholder={descripcion}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                descripcion?.substring(0, 12) + "..."
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="caracteristicas"
                                  type="text"
                                  placeholder={caracteristicas}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                caracteristicas?.substring(0, 12) + "..."
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                sale ? (
                                  <Form.Check
                                    name="sale"
                                    onChange={handleChangeSale}
                                    type="switch"
                                    checked="true"
                                    id="custom-switch"
                                  />
                                ) : (
                                  <Form.Check
                                    name="sale"
                                    onChange={handleChangeSale}
                                    type="switch"
                                    checked="false"
                                    id="custom-switch"
                                  />
                                )
                              ) : (
                                sale
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="descuento"
                                  type="text"
                                  placeholder={descuento}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                descuento
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="stock"
                                  type="text"
                                  placeholder={stock}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                stock
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="categoria"
                                  type="text"
                                  placeholder={categoria}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                categoria[0]?.substring(0, 12) + "..."
                              )}
                            </td>
                            <td>
                              {modificar[id] ? (
                                <Form.Control
                                  name="tags"
                                  type="text"
                                  placeholder={tags}
                                  onChange={(e) => console.log(e.target.value)}
                                />
                              ) : (
                                tags[0]?.substring(0, 12) + "..."
                              )}
                            </td>
                            <td>
                              <Container>
                                <Row>
                                  <Col>
                                    <Button
                                      variant="link"
                                      className="p-0 m-2"
                                      onClick={() => toggleModificar(id)}
                                    >
                                      <Image
                                        style={{
                                          width: "1.5rem",
                                          height: "1.5rem",
                                        }}
                                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716171361/proyects/VibeSex/icons/lapiz_izymoe.png"
                                        rounded
                                      />
                                    </Button>
                                  </Col>
                                  <Col>
                                    <Button
                                      variant="link"
                                      className="p-0 m-2"
                                      onClick={() =>
                                        deleteById(id, imagen && imagen[0])
                                      }
                                    >
                                      <Image
                                        style={{
                                          width: "1.5rem",
                                          height: "1.5rem",
                                        }}
                                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716171361/proyects/VibeSex/icons/borrar_oeceo8.png"
                                        rounded
                                      />
                                    </Button>
                                  </Col>
                                </Row>
                              </Container>
                            </td>
                          </tr>
                        );
                      }
                    )}
                    {error && <h2>{error.message}</h2>}
                  </tbody>
                </Table>
              </Row>
            </Tab.Pane>
            {/* CONTENIDO DEL TAB DE NUEVO PRODUCTO */}
            <Tab.Pane eventKey="NuevoProducto">
              <Form className="p-5" onSubmit={handleSubmit}>
                <h1 className="mb-3 p-2 text-center">Agregar nuevo producto</h1>
                {/* INPUTS NOMBRE Y PRECIO */}
                <Row className="mb-3 g-2">
                  <Col md>
                    <FloatingLabel controlId="floatingNombre" label="Nombre">
                      <Form.Control
                        name="nombre"
                        onChange={handleChange}
                        type="text"
                        placeholder="Nombre"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingPrecio" label="Precio">
                      <Form.Control
                        name="precio"
                        onChange={handleChange}
                        type="text"
                        placeholder="Precio"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                {/* INPUTS DESCRIPCION Y CARACTERÍSTICAS */}
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridDescripcion">
                    <FloatingLabel
                      controlId="floatingDescripcion"
                      label="Descripción"
                    >
                      <Form.Control
                        name="descripcion"
                        onChange={handleChange}
                        as="textarea"
                        placeholder="Descripción"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formGridCaracteristicas"
                  >
                    <FloatingLabel
                      controlId="floatingCaracteristicas"
                      label="Características"
                      className="mb-3"
                    >
                      <Form.Control
                        name="caracteristicas"
                        onChange={handleChange}
                        as="textarea"
                        placeholder="Características"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                {/* INPUTS Y CHECK DE SALE DESCUENTO */}
                <Row className="mb-3 ">
                  <Form.Group className="mb-3" controlId="formGridSale">
                    <Form.Check
                      name="sale"
                      onChange={handleChangeSale}
                      type="switch"
                      id="custom-switch"
                      label="Sale (Para productos con descuentos o promos)"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridDescuento">
                    <FloatingLabel
                      controlId="floatingDescuento"
                      label="Descuento"
                    >
                      <Form.Control
                        name="descuento"
                        onChange={handleChange}
                        type="text"
                        placeholder="Descuentro"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                {/* INPUTS STOCK Y CARACTERISTICAS TAGS */}
                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridStock">
                    <FloatingLabel controlId="floatingStock" label="Stock">
                      <Form.Control
                        name="stock"
                        onChange={handleChange}
                        type="text"
                        placeholder="Stock"
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridCategorias">
                    <FloatingLabel
                      controlId="floatingCategorias"
                      label="Ingresa las categorias del producto separados por coma(,)"
                      className="mb-3"
                    >
                      <Form.Control
                        name="categoria"
                        as="textarea"
                        placeholder="Ingresa las categorias del producto separados por coma(,)"
                        value={formData.categoria}
                        onChange={handleInputChange}
                        onBlur={transformarInput}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridTags">
                    <FloatingLabel
                      controlId="floatingTags"
                      label="Ingresa los tags del producto separados por coma(,)"
                      className="mb-3"
                    >
                      <Form.Control
                        name="tags"
                        as="textarea"
                        placeholder="Ingresa los tags del producto separados por coma(,)"
                        value={formData.tags}
                        onChange={handleInputChange}
                        onBlur={transformarInput}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                {/* INPUTS PARA AGREGAR IMAGENES */}
                <Row className="mb-3">
                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <FloatingLabel
                      controlId="floatingUrlImg"
                      label="Ingresa las url de las imagenes separadas por coma(,)"
                      className="mb-3"
                    >
                      <Form.Control
                        name="imagen"
                        as="textarea"
                        placeholder="Ingresa las url de las imagenes separadas por coma(,)"
                        value={formData.imagen}
                        onChange={handleInputChange}
                        onBlur={transformarInput}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={transformarInput}
                >
                  Publicar
                </Button>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Productos;
