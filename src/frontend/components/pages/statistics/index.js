import React from "react";
import Nav  from "../../navigation";
import Iframe from "react-iframe";
import styled from "styled-components";

import "../../../styles/grid.css";
import "../../../styles/components/statistics.css";
import { func } from "prop-types";

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

const Statistics = () => (
  <Padding>
  <Title> Bike Data Explorer </Title>
  <section id="about">
    <p>
      Placeholder page that will eventually display reports, etc
    </p>
    <p className="content">
    <Iframe
      url="https://datastudio.google.com/embed/reporting/143a8WOiZiJuYTYUUHscE-Bd-sv-ttk9d/page/mMot"
      width="1200px"
      height="900px"
      id="dataStudio"
      frameborder="0"
      className="dataStudioClass"
      style="border:0"
      allowfullscreen
      display="initial"
      position="relative"
    />
    </p>
    <Nav />
    </section>
    </Padding>
);

export { Statistics };
