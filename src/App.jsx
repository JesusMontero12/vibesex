import { BrowserRouter, Route, Routes } from "react-router-dom";
import InventarioListContainer from "./components/pages/inventario/InventarioListContainer";
import Layouts from "./components/layouts/Layouts.jsx";
import ProductosListContainer from "./components/pages/productos/ProductosListContainer.jsx";
import CatalogoListContainer from "./components/pages/catalogo/CatalogoListContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatalogoListContainer />} />
        <Route path="/:key/:value" element={<CatalogoListContainer />} />
        <Route element={<Layouts />}>
          <Route path="/adminDashboard" element={<ProductosListContainer />} />
          <Route path="/inventario" element={<InventarioListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
