import React from "react";
import Nav  from "../../navigation";
import Iframe from "react-iframe";
import styled from "styled-components";

import "../../../styles/grid.css";
import "../../../styles/components/statistics.css";
import { func } from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FrameContainer = styled.div`
  flex: 1 0 auto;
  canvas {
    cursor: default;
  }
`;

const Title = styled.h1`
  color: wheat;
  margin: 10px 13px;
`;


const Statistics = () => (
  <Container>
    <Title>Bike Data Explorer</Title>
    <FrameContainer>
      <Iframe
        url="https://datastudio.google.com/embed/reporting/143a8WOiZiJuYTYUUHscE-Bd-sv-ttk9d/page/mMot"
        id="dataStudio"
        frameBorder="0"
        className="dataStudioClass"
        width="100%"
        height="100%"
        allowfullscreen
        display="block"
        styles={{borderWidth: 0, display: "block"}}
      />
    </FrameContainer>
    <div style={{marginLeft: "20px"}}>
      <Nav />
    </div>
  </Container>
);

export { Statistics };
