import * as React from "react";
import { Subject } from "rxjs/Subject";
import { forkJoin } from "rxjs/observable/forkJoin";
import { App } from "../app";
import { Animation } from "./animation";

export class Intro extends React.Component {
  state = {
    isLoaded: false,
    isDone: false
  }
  componentDidMount() {
    var imgs = [
      "bg",
      "OtherEvents",
      "Registry",
      "ThingsToDo",
      "Wedding",
      "WhereToStay",
    ];
    forkJoin(
      imgs.map(i => {
        const evt = new Subject();
        const img = new Image();
        img.src = `/img/intro/${i}.png`;
        img.onload = function() {
          evt.next(true);
          evt.complete();
        };
        return evt;
      })
    ).subscribe(() => {
      this.setState({
        ...this.state,
        isLoaded: true
      })
    })
  }

  render() {
    return (
      <>
        {
          !this.state.isLoaded
          ? <div>loading...</div>
          : (
            this.state.isDone
            ? <App />
            : <Animation />
          )
        }
      </>
    )
  }
}
