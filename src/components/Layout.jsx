import React from "react";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <SideNav />

      <Outlet />
    </>
  );
}

export default Layout;
