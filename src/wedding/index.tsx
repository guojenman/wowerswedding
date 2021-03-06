import * as React from "react";
import { Grid } from "grid-styled";
import { MainFlex } from "../common/flexes";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 2.4em !important;
`
export const MainFlexLocal = styled(MainFlex)`
  margin-bottom: 2rem;
`

export const MainFlexLocal2 = styled(MainFlex)`
  margin: 0 auto 2rem auto;
`

export class Wedding extends React.Component {
  render() {
    return (
      <>
        <MainFlexLocal>
          <Grid width={1}>
            <img src="/img/Wedding-TheArbor.jpg" width="100%"/>
          </Grid>
        </MainFlexLocal>
        <MainFlexLocal2>
          <Grid width={4/6} style={{margin: "0 auto"}}>
          <Paragraph>
  Saturday, May 12, 5:00 pm<br/>
  The Arbor, Carneros Resort and Spa<br/>
  4048 Sonoma Highway, Napa, California
          </Paragraph>
          <Paragraph>
  After the ceremony, cocktails and hors d'oeuvres will be served in the Courtyard
  <br/>
  Dinner and dancing will follow in the Napa Ballroom
          </Paragraph>
          <Paragraph>
            <NavLink to="/menu" onClick={() => console.log(1)}><em>Dinner Menu</em></NavLink>
          </Paragraph>
          <Paragraph>
  Cocktail Attire<br/>
  <em>Note that surfaces range from paved pathways to gravel and grass<br/>
  Please choose footwear accordingly</em>
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
      </>
    )
  }
}
