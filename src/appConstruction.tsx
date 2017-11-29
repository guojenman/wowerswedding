import * as React from "react";
import { Switch, Route } from "react-router";
import { ComingSoon } from "./comingSoon";
import { App } from "./app";

export class AppConstruction extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ComingSoon} />
        <Route path="/private" component={App} />
        <Route component={ComingSoon} />
      </Switch>
    )
  }
}
