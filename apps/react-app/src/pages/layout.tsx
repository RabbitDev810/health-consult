import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDrawerContext } from "@/hooks/useDrawer";

const Layout = () => {
  const { isLeftDrawerOpen, toggleLeftDrawer } = useDrawerContext();

  return (
    <div className="flex flex-row" style={{ height: "100%" }}>
      <Outlet />
    </div>
  );
};

export default Layout;
