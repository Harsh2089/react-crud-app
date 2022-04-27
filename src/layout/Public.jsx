import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Header from "../component/Header";

// Layout for public pages
const Public = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

Public.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Public;
