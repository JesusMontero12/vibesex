import { useState } from "react";
import Inventario from "./Inventario.jsx";

const InventarioListContainer = () => {
  const [modificar, setModificar] = useState({});

  const toggleModificar = (id) => {
    setModificar((prevState) => ({
      ...prevState,[id]: !prevState[id],
    }));
  };

  return <Inventario modificar={modificar} toggleModificar={toggleModificar} />;
};

export default InventarioListContainer;
