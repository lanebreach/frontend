import React from "react";
import styled from "styled-components";
import Map from "../map";
import { Link } from "react-router-dom";
import Nav from "../navigation";

const Padding = styled.div`
  padding: 20px;
  canvas {
    cursor: default;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 25px;
  left: 40px;
  z-index: 1;
  color: wheat;
`;

const style = {
  position: "relative",
  float: "right",
  paddingRight: "20px",
  zIndex: 1,
  color: "wheat",
  cursor: "pointer"
};

const Landing = () => (
  <Padding>
    <Title> Let's get cars out of bike lanes.</Title>
    {/* <Navigation /> */}
    <Map />
    <Nav />
  </Padding>
);

export default Landing;
