import FooterContainer from "./footer/FooterContainer.jsx";
import NavBarContainer from "./navBar/NavBarContainer.jsx";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <NavBarContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

export default Layouts;
