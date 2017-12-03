import * as React from "react";
import { Header } from "./header";
import styled from "styled-components";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { WhereToStay } from "./whereToStay/index";
import { ThingsToDo } from "./thingsToDo/index";
import { Wedding } from "./wedding/index";
import { OtherEvents } from "./otherEvents/index";
import { Registry } from "./registry/index";
import { Welcome } from "./welcome/index";

const AppContainer = styled.div`
  font-family: Roboto script=all rev=1;
  font-weight: 300;
  font-size: 16px;
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

class AppBase extends React.Component {
  render() {
    const {location} = this.props as any;
    return (
      <div id="outer-container" style={{height: "100%"}}>
      <AppContainer>
        {location.pathname !== "/" ? <Header/> : null}
        <div id="page-wrap" style={{height: "100%"}}>
        <Switch>
          <Route path="/wedding" exact component={Wedding} />
          <Route path="/where-to-stay" exact component={WhereToStay} />
          <Route path="/things-to-do" exact component={ThingsToDo} />
          <Route path="/other-events" exact component={OtherEvents} />
          <Route path="/registry" exact component={Registry} />
          <Route path="/" exact component={Welcome} />
          <Redirect to="/" />
        </Switch>
        </div>
      </AppContainer>
      </div>
    )
  }
}
export const App = withRouter(props => <AppBase {...props} />);
