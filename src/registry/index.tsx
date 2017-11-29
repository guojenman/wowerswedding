import * as React from "react";
import { MainFlex, Img } from "../common/flexes";
import { Box, Grid } from "grid-styled";


export class Registry extends React.Component {
  render() {
    return (
      <>
      <MainFlex>
        <Box width={1} p={10}>
        <p>
        <strong>Your presence is the best gift we can hope to receive.</strong>
        </p>
        <p>
          If you would like to celebrate with a gift, please consider donating to Planned Parenthood for health care, information and education or to UndocuFund for Fire Relief in Napa and Sonoma Counties instead.
        </p>
        <p>
          A registry has also been set up at Zola and Williams Sonoma.
        </p>
        </Box>
      </MainFlex>
      <MainFlex>
        <Grid width={1/6} p={10}>
          <a href="https://www.plannedparenthood.org" target="_blank"><Img src="/img/Registry-PlannedParenthood.jpg"/></a>
        </Grid>
        <Grid width={1/6} p={10}>
          <a href="http://undocufund.org/" target="_blank"><Img src="/img/Registry-UndocuFund.jpg"/></a>
        </Grid>
        <Grid width={1/6} p={10}>
          <a href="https://www.zola.com/registry/wowerswedding" target="_blank"><Img src="/img/Registry-Zola.jpg"/></a>
        </Grid>
        <Grid width={1/6} p={10}>
          <a href="https://www.williams-sonoma.com/registry/find-registry.html?cm_type=gnav" target="_blank"><Img src="/img/Registry-WilliamsSonoma.jpg"/></a>
        </Grid>
      </MainFlex>
      </>
    )
  }
}
