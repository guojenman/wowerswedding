import * as React from "react";
import styled from "styled-components";
import { StaggeredMotion, spring } from "react-motion";
import { Link } from "react-router-dom";
const imgBg = require("./bg.png");

const Container = styled.div`
  background: url(${imgBg});
  background-position: top center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;

  .welcome {
    text-align: center;
    height: 100%;
  }
  .heading {
    display: inline-block;
    font-weight: 100;
    font-size: 3em;
    background: #fff;
    margin-top: 2em;
    padding: 0 0.5em;
  }
  .body {
    display: inline-block;
    font-weight: 300;
    background: #fff;
    padding: 1rem;
  }
  .footer {
    display: inline-block;
    font-weight: 300;
    font-style: italic;
    background: #fff;
    padding: 1rem;
    margin-top: -0.5em;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    .heading {
      margin-top: 6.5rem;
    }
  }
`;
export class Welcome extends React.Component {
  render() {
    const parts = [
      <div className="heading">Amanda & Calvin</div>,
      <div className="body">
        May 12, 2018<br />
        Carneros Resort and Spa<br />
        Napa, California<br />
      </div>,
      <div className="footer">Enter</div>
    ];
    return (
      <Link to="/wedding">
        <Container>
          <div className="welcome">
            <StaggeredMotion
              defaultStyles={[{ opacity: 0, marginLeft: -30 }, { opacity: 0, marginLeft: -30 }, { opacity: 0, marginLeft: -30 }]}
              styles={(s: any[]) =>
                s.map((_, i) => {
                  return i === 0
                    ? { opacity: spring(1), marginLeft: spring(0) }
                    : { opacity: spring(s[i - 1].opacity), marginLeft: spring(s[i - 1].marginLeft) };
                })
              }
            >
              {styles => (
                <div>
                  {styles.map((style, i) => (
                    <div key={i} style={style}>
                      {parts[i]}
                    </div>
                  ))}
                </div>
              )}
            </StaggeredMotion>
          </div>
        </Container>
      </Link>
    );
  }
}
