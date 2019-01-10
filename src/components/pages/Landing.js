import React from "react";
import styled from "styled-components";
import Map from "../map";

const Padding = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  position: absolute;
  top: 25px;
  left: 40px;
  z-index: 1;
  color: wheat;
`;

const Landing = () => (
  <Padding>
    <Title>Let's get cars out of bike lanes.</Title>
    <Map />
  </Padding>
);

export default Landing;
