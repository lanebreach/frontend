import React from "react";
import styled from "styled-components";
import Map from "../map";
import { Redirect } from "react-router";

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

class About extends React.Component {
  constructor () {
    super();
    this.state = {
      redirect: false
    };
  }

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render = () => {
    if (this.state.redirect) {
      return <Redirect push to="/about" />;
    }

    const style = {
      "position": "relative",
      "float": "right",
      "paddingRight": "20px",
      "zIndex": 1,
      "color": "wheat",
      "cursor": "pointer"
    };

    return (<span onClick={this.handleOnClick} style={style}><h4>About</h4></span>);
  }
};

const Landing = () => (
  <Padding>
    <Title>Let's get cars out of bike lanes.</Title>
    <About />
    <Map />
  </Padding>
);

export default Landing;
