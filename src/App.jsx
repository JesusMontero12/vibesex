import { BrowserRouter, Route, Routes } from "react-router-dom";
import InventarioListContainer from "./components/pages/inventario/InventarioListContainer";
import Layouts from "./components/layouts/Layouts.jsx";
import ProductosListContainer from "./components/pages/productos/ProductosListContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<ProductosListContainer />} />
          <Route path="/inventario" element={<InventarioListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
