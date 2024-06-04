import { BrowserRouter, Route, Routes } from "react-router-dom";
import InventarioListContainer from "./components/pages/inventario/InventarioListContainer";
import Layouts from "./components/layouts/Layouts.jsx";
import ProductosListContainer from "./components/pages/productos/ProductosListContainer.jsx";
import CatalogoListContainer from "./components/pages/catalogo/CatalogoListContainer.jsx";
import DetalleProductoContainer from "./components/pages/detalleProducto/DetalleProductoContainer.jsx";
import CarritoContainer from "./components/pages/carrito/CarritoContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<CatalogoListContainer />} />
          <Route path="/filtros/:name" element={<CatalogoListContainer />} />
          <Route
            path="/detalleProducto/:id"
            element={<DetalleProductoContainer />}
          />
          <Route path="/cart" element={<CarritoContainer />} />

          <Route element={<Layouts />}>
            <Route
              path="/adminDashboard"
              element={<ProductosListContainer />}
            />
            <Route path="/inventario" element={<InventarioListContainer />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
