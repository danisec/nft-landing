import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="header/logo-header.svg" />
        <link
          href="https://fontbit.io/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;family=Varela+Round&amp;family=Noto+Serif+Display:wght@600&amp;display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        ></link>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
}
