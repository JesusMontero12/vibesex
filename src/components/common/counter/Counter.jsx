import { Button, ButtonGroup, ButtonToolbar, Container } from "react-bootstrap";

const Counter = () => {
  return (
    <>
      <Container fluid className="my-4 mx-0 p-0">
        <ButtonToolbar aria-label="Toolbar with button groups" className="my-4">
          <ButtonGroup className="mx-1" aria-label="Basic example">
            <Button variant="secondary">-</Button>
            <p
              className="text-black-50 mx-4 my-2"
              style={{
                fontFamily: "arimo",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              {1}
            </p>
            <Button variant="secondary">+</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar aria-label="Toolbar with button groups" className="my-4">
          <ButtonGroup className="mx-1" aria-label="Basic example">
            <Button variant="dark">Agregar al carrito local</Button>
          </ButtonGroup>
          <ButtonGroup className="mx-1" aria-label="Basic example">
            <Button
              variant="white"
              onClick={() => {
                onAddFav(idFav);
              }}
            >
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
                alt="Favorito"
              />
              {/* {fav.some((product) => product.id === idFav && product.Add) ? (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
                alt="Favorito"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
                alt="No Favorito"
              />
            )} */}
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Container>
    </>
  );
};

export default Counter;
