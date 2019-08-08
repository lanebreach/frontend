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

const NavContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    bottom: 0;
    float: right;
    z-index: 2;
    position: fixed;
    button {
      position: relative;
      bottom: 0;
      left: 0;
      float: right;
      z-index: 1;
      cursor: pointer;
      color: wheat;
      width: 50px;
      height: 50px;
      display: block;
      margin: 30px 30px 50px 30px;
      background: none;
      border: none;
    }
    nav{
      display: ${props=> props.open? "flex": "none"};
      flex-direction: column;
      padding: 30px;
      background: black;
      border: 1px solid white;
      color: black;console.log(JSON.stringify())
    }
`

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
    <a href="https://app.lanebreach.org" style={style}>
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

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    return <NavContainer open={open}>
      <button tabIndex={1} aria-expanded={open} aria-controls="main-navigation"  onClick={
          ()=>setOpen(!open)
        }>
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
      </button>
        <nav id="main-navigation">
          <AboutLink />
          <StatsLink />
          <WebAppLink />
          <IOSLink />
        </nav>
    </NavContainer>
}

const Landing = () => (
  <Padding>
    <Title> Let's get cars out of bike lanes.</Title>
    {/* <Navigation /> */}
    <Map />
    <Nav />
  </Padding>
);

export default Landing;
