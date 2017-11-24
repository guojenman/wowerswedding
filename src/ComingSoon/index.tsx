import * as React from "react";
import styled from "styled-components";
const imgBg = require("./bg.png");

const Container = styled.div`
  background: url(${imgBg});
  background-position: top center;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  height: 100%;

  .welcome {
    text-align: center;
    height: 100%;
  }
  .heading {
    display: inline-block;
    font-weight: 100;
    font-size: 2.5em;
    background: #fff;
    padding: 1rem;
    margin-top: 5.5rem;
  }
  .body {
    display: inline-block;
    font-weight: 300;
    line-height: 1.3em;
    background: #fff;
    padding: 1rem;
  }
  .footer {
    display: inline-block;
    font-weight: 300;
    font-style: italic;
    background: #fff;
    padding: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    .heading {
      margin-top: 6.5rem;
    }
  }
`;
export class ComingSoon extends React.Component {
  render() {
    return (
      <Container>
        <div className="welcome">
          <div className="heading">Amanda & Calvin</div>
          <br />
          <div className="body">
            May 12, 2018<br />
            Carneros Resort and Spa<br />
            Napa, California<br />
          </div>
          <br />
          <div className="footer">Site coming soon</div>
        </div>
      </Container>
    );
  }
}
