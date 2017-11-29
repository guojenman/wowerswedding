import * as React from "react";
import { Grid } from "grid-styled";
import { MainFlexLocal, MainFlexLocal2, Paragraph } from "../wedding/index";

export class OtherEvents extends React.Component {
  render() {
    return (
      <>
        <MainFlexLocal>
          <Grid width={1}>
            <img src="/img/Other-WelcomeDrinks.jpg" width="100%"/>
          </Grid>
        </MainFlexLocal>
        <MainFlexLocal2>
          <Grid width={4/6} style={{margin: "0 auto"}}>
          <Paragraph>
          Welcome Drinks<br/>
          Hosted by Jessica Wong and Kate Bowers
          </Paragraph>
          <Paragraph>
          Friday, May 11<br/>
          Details to follow
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
      </>
    )
  }
}
