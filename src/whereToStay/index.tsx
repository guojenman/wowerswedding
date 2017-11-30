import * as React from "react";
import { MainFlex, Img } from "../common/flexes";
import { Grid } from "grid-styled";
import { places } from "./places";


export class WhereToStay extends React.Component {
  
  render() {
    return (
      <MainFlex wrap>
        {
          places.map(place => (
            <Grid key={place.name} width={[1, 1/2]} p={[1, 0]}>
              <a href={place.url} target={place.name}>
              <Grid width={1/3} p={10}>
                <Img src={place.image}/>
              </Grid>
              <Grid width={2/3} p={10}>
                  <strong>{place.name}</strong><br/>
                  {place.body}
              </Grid>
              </a>
            </Grid>
          ))
        }
      </MainFlex>
    )
  }
}
