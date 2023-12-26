import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <title>{"Imagenes del mundo"}</title>
      </Head>
      <div className="navbar sticky top-0 z-50 bg-base-100"></div>
    </>
  );
}; 


export default Header;
