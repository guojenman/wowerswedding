import * as React from "react";
import { Grid } from "grid-styled";
import { MainFlex } from "../common/flexes";
import styled from "styled-components";

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

export class Menu extends React.Component {
  render() {
    return (
      <>
        <MainFlexLocal>
          <Grid width={1}>
            <img src="/img/Wedding-Menu.jpg" width="100%"/>
          </Grid>
        </MainFlexLocal>
        <MainFlexLocal2>
          <Grid width={4/6} style={{margin: "0 auto"}}>
          <Paragraph>
          Dinner Menu
          </Paragraph>
          <Paragraph>
          Garden Green Salad<br/>
          <em>Frilly mustard greens, shaved roots, manchego</em>
          </Paragraph>
          <Paragraph>
          Your choice of one of following entrées:
          </Paragraph>
          <Paragraph>
            <img src="/img/Beef.png" style={{height: "1.75em"}}/><br/>
          New York Strip Steak
          <br/><em>Potato purée, rainbow chard</em>
          </Paragraph>
          <Paragraph>
          <img src="/img/Chicken.png" style={{height: "1.75em"}}/><br/>
          Coq au Vin
          <br/><em>Baby carrots, pearl onions, shard</em>
          </Paragraph>
          <Paragraph>
          <img src="/img/Veggie.png" style={{height: "1.75em"}}/><br/>
          Mushroom Risotto (vegetarian)
          <br/><em>Truffle, hen of the woods, micro greens</em>
          </Paragraph>
          <Paragraph>
          Dessert
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
      </>
    )
  }
}