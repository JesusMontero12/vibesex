import ProductoCard from "./ProductoCard";

const ProductoCardContainer = ({
  id,
  imagen,
  nombre,
  precio,
  descripcion,
  stock,
}) => {
  return (
    <ProductoCard
      id={id}
      imagen={imagen}
      nombre={nombre}
      precio={precio}
      descripcion={descripcion}
      stock={stock}
    />
  );
};

export default ProductoCardContainer;
