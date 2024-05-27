import { BrowserRouter, Route, Routes } from "react-router-dom";
import InventarioListContainer from "./components/pages/inventario/InventarioListContainer";
import Layouts from "./components/layouts/Layouts.jsx";
import ProductosListContainer from "./components/pages/productos/ProductosListContainer.jsx";
import CatalogoListContainer from "./components/pages/catalogo/CatalogoListContainer.jsx";
import DetalleProductoContainer from "./components/pages/detalleProducto/DetalleProductoContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogoListContainer />} />
        <Route path="/:key/:value" element={<CatalogoListContainer />} />
        <Route
          path="/detalleProducto/:id"
          element={<DetalleProductoContainer />}
        />
        <Route element={<Layouts />}>
          <Route path="/adminDashboard" element={<ProductosListContainer />} />
          <Route path="/inventario" element={<InventarioListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
