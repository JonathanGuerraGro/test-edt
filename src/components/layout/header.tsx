import React from "react";
import { Layout, Menu, MenuProps } from "antd";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Inicio",
    key: "initial",
    className: "menu-item",
  },
  {
    label: "Explorar",
    key: "explore",
    className: "menu-item",
  },
  {
    label: "Sobre Nosotros",
    key: "about",
    className: "menu-item",
  },
];

const MelpHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          background: "none",
        }}
      >
        <img src="/logo-melp-negro.png" alt="Logo" style={{ height: "50px" }} />
        <Menu className="custom-menu" mode="horizontal" items={items}></Menu>
      </Header>
    </Layout>
  );
};

export default MelpHeader;
