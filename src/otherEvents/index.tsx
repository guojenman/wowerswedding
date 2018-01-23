import * as React from "react";
import { Grid } from "grid-styled";
import { MainFlexLocal, MainFlexLocal2, Paragraph } from "../wedding/index";

export class OtherEvents extends React.Component {
  render() {
    return (
      <>
        <MainFlexLocal>
          <Grid width={1}>
            <img src="/img/WelcomeDrinks.jpg" width="100%"/>
          </Grid>
        </MainFlexLocal>
        <MainFlexLocal2>
          <Grid width={4/6} style={{margin: "0 auto"}}>
          <Paragraph>
          Welcome Drinks<br/><br/>
          Friday, May 11<br/>
          <em>Details to follow</em>
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
        <MainFlexLocal>
          <Grid width={1}>
            <img src="/img/Brunch.jpg" width="100%"/>
          </Grid>
        </MainFlexLocal>
        <MainFlexLocal2>
          <Grid width={4/6} style={{margin: "0 auto"}}>
          <Paragraph>
          Brunch<br/><br/>
          Sunday, May 13<br/>
          <em>Details to follow</em>
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
      </>
    )
  }
}
