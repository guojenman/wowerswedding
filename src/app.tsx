import * as React from "react";
import { Header } from "./header";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import { WhereToStay } from "./whereToStay/index";
import { ThingsToDo } from "./thingsToDo/index";
import { Wedding } from "./wedding/index";
import { OtherEvents } from "./otherEvents/index";
import { Registry } from "./registry/index";

const AppContainer = styled.div`
  font-family: Roboto script=all rev=1;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.5;
  color: #646464;
  height: 100%;
  overflow: auto;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  p {
    margin-bottom: 1.2em;
  }
  strong {
    font-weight: 500;
  }
  em {
    font-style: italic;ro
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export class App extends React.Component {
  render() {
    return (
      <div id="outer-container" style={{height: "100%"}}>
      <AppContainer>
        <Header/>
        <div id="page-wrap">
        <Switch>
          <Route path="/private/wedding" exact component={Wedding} />
          <Route path="/private/where-to-stay" exact component={WhereToStay} />
          <Route path="/private/things-to-do" exact component={ThingsToDo} />
          <Route path="/private/other-events" exact component={OtherEvents} />
          <Route path="/private/registry" exact component={Registry} />
          <Route component={Wedding} />
        </Switch>
        </div>
      </AppContainer>
      </div>
    )
  }
}
