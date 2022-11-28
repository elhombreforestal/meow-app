import { Container } from "@mui/system";
import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="xl" sx={{ marginTop: "80px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
