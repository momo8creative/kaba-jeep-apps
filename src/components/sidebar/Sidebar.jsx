import { HiX } from "react-icons/hi";
import { SButtonClose, SNavLink, SSidebar } from "./Styles";
import dataMenus from "../../datas/dataMenus";

const Sidebar = ({ isShow, closeNav }) => {
  return (
    <>
      <SSidebar show={isShow}>
        <SButtonClose onClick={closeNav}>
          <HiX />
        </SButtonClose>

        {dataMenus().map(({ label, to, icon }, i) => (
          <SNavLink to={to} onClick={closeNav} key={i}>
            {icon} {label}
          </SNavLink>
        ))}
      </SSidebar>
    </>
  );
};

export default Sidebar;
