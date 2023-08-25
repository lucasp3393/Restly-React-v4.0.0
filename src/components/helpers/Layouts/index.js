import React from "react";
import FooterHomeTwo from "../../partials/Footers/FooterHomeTwo/index";
import HeaderHomeFour from "../../partials/Headers/HeaderHomeFour";
import Hero from "./Hero";

export default function Layouts({ children, pageTitle, breadcrumbs = [] }) {
  return (
    <>
      <HeaderHomeFour />
      <Hero pageTitle={pageTitle} breadcrumbs={breadcrumbs} />
      {children && children}
      <FooterHomeTwo />
    </>
  );
}