import React from "react";
import styled from "styled-components";
import Map from "../map";
import { Link } from "react-router-dom";
import { Navigation } from "../navigation";

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
    position: "relative",
    float: "right",
    paddingRight: "20px",
    zIndex: 1,
    color: "wheat",
    cursor: "pointer"
  };

  return (
    <Link style={style} to="/about">
      <h4>About</h4>
    </Link>
  );
};

const IOSLink = () => {
  const style = {
    position: "relative",
    float: "right",
    paddingRight: "20px",
    zIndex: 1,
    color: "wheat",
    cursor: "pointer"
  };

  return (
    <a
      href="https://apps.apple.com/us/app/lane-breach/id1447775781"
      style={style}
    >
      <h4>iOS app</h4>
    </a>
  );
};

const WebAppLink = () => {
  const style = {
    position: "relative",
    float: "right",
    paddingRight: "20px",
    zIndex: 1,
    color: "wheat",
    cursor: "pointer"
  };

  return (
    <a href="https://lanebreach.netlify.com/" style={style}>
      <h4>web app</h4>
    </a>
  );
};

const StatsLink = () => {
  const style = {
    position: "relative",
    float: "right",
    paddingRight: "20px",
    zIndex: 1,
    color: "wheat",
    cursor: "pointer"
  };

  return (
    <Link style={style} to="/stats">
      <h4>stats</h4>
    </Link>
  );
};

const Landing = () => (
  <Padding>
    <Title> Let's get cars out of bike lanes.</Title>
    {/* <Navigation /> */}
    <AboutLink />
    <StatsLink />
    <WebAppLink />
    <IOSLink />
    <Map />
  </Padding>
);

export default Landing;
