import {
  Table,
  Row,
  Container,
  Col,
  Button,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import { inventario } from "../../../data/productsMock";

const Inventario = ({ modificar, toggleModificar }) => {
  return (
    <>
      <Row className="mb-3 p-5">
        <h1 className="mb-4 text-center">Inventario de productos</h1>
        <Table responsive className="table table-striped table-dark">
          <thead>
            <tr>
              <th className="fs-5 p-4">ID</th>
              <th className="fs-5 p-4">PRODUCTO</th>
              <th className="fs-5 p-4">STOCK INICIAL</th>
              <th className="fs-5 p-4">STOCK ACTUAL</th>
              <th className="fs-5 p-4">VENDIDOS</th>
              <th className="fs-5 p-4">CREADO</th>
              <th className="fs-5 p-4">ACTUALIZADO</th>
              <th className="fs-5 p-4">ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {inventario.map((item) => (
              <tr key={item.id}>
                <td className="fs-5">{item.id}</td>
                <td className="fs-5">{item.idProducto}</td>
                <td className="fs-5">
                  {modificar[item.id] ? (
                    <Form.Control
                      type="text"
                      value={item.stockInicial}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  ) : (
                    item.stockInicial
                  )}
                </td>
                <td className="fs-5">
                  {modificar[item.id] ? (
                    <Form.Control
                      type="text"
                      value={item.stock}
                      onChange={(e) => console.log(e.target.value)}
                    />
                  ) : (
                    item.stock
                  )}
                </td>
                <td className="fs-5">{item.cntVendido}</td>
                <td className="fs-5">{item.creado}</td>
                <td className="fs-5">{item.modificado}</td>
                <td className="fs-5">
                  <Button
                    variant="link"
                    onClick={() => toggleModificar(item.id)}
                  >
                    <Image
                      style={{ width: "1.5rem", height: "1.5rem" }}
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1716171361/proyects/VibeSex/icons/lapiz_izymoe.png"
                      rounded
                    />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default Inventario;
