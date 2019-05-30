import React from "react";
import styled from "styled-components";
import Map from "../map";
import { Link } from 'react-router-dom';

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

const AboutLink = () => {

    const style = {
      "position": "relative",
      "float": "right",
      "paddingRight": "20px",
      "zIndex": 1,
      "color": "wheat",
      "cursor": "pointer"
    };

    return (<Link style={style}  to="/about"><h4>About</h4></Link>);
  
};

const Landing = () => (
  <Padding>
    <Title> Let's get cars out of bike lanes.</Title>
    <AboutLink /> 
    <Map />
  </Padding>
);

export default Landing;
