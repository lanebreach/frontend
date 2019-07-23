import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
  padding: 16px 10vw;
  h1 {
    text-align: center;
    font-size: 1.8rem;
  }
  a {
    display: flex;
    flex-direction: column;
    text-align: center;
    img {
      margin: 1rem auto;
      width: 50%;
    }
  }
`;

const AppsPage = () => {
  return (
    <Main>
      <h1>Welcome to Lanebreach!</h1>
      <p>
        Cars be all up in our bike lanes. We've got two tools to help you report
        badly behaving car with just a couple clicks.
      </p>
      <a href="https://app.lanebreach.org">
        <h2>Visit the Web App</h2>
        <img
          src="https://app.lanebreach.org/icons/icon-512x512.png?v=26551d5953fa712ca83780e809230265"
          alt="lanebreach logo"
        />
      </a>
      <p>
        The Web App is a Progressive Web App, which means you can add it to your
        homescreen if you like, or just interact with it in the browser.
      </p>
      <a href="https://app.lanebreach.org">
        <h2>Download the iOS App</h2>
        <img
          src="https://app.lanebreach.org/icons/icon-512x512.png?v=26551d5953fa712ca83780e809230265"
          alt="lanebreach logo"
        />
      </a>
      <p>
        The Web App is a Progressive Web App, which means you can add it to your
        homescreen if you like, or just interact with it in the browser.
      </p>
    </Main>
  );
};

export default AppsPage;
