import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { SContent, SFooter, SLayout, SMain } from "./Styles";

const Layout = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  const handleCloseNav = () => setIsShowNav(false);

  return (
    <SLayout>
      <Navbar openNav={() => setIsShowNav(true)} />

      <SMain>
        <Sidebar isShow={isShowNav} closeNav={handleCloseNav} />

        <SContent>
          <Outlet />

          <SFooter>
            <div>&copy; Copyright 2022 Kaba Jeep Apps</div>
            <div>By Momo Creative</div>
          </SFooter>
        </SContent>
      </SMain>
    </SLayout>
  );
};

export default Layout;
