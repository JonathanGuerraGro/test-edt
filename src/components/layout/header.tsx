import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import Head from "next/head";

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
    <Layout style={{ background: "none" }}>
      <Head>
        <title>Melp</title>
        <link rel="icon" href="./logo.svg" />
      </Head>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
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
