import { HiMenu } from "react-icons/hi";
import { SNavbar, SNavbarButton } from "./Styles";

const Navbar = ({ openNav }) => {
  return (
    <SNavbar>
      <SNavbarButton onClick={openNav}>
        <HiMenu />
      </SNavbarButton>
      <h1>Jeep Apps</h1>
    </SNavbar>
  );
};

export default Navbar;
