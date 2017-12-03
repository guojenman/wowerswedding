import * as React from "react";
import { MainFlex, Img } from "../common/flexes";
import { Box } from "grid-styled";
import { placesDo } from "./placesDo";
import { placesDrink } from "./placesDrink";
import { placesEat } from "./placesEat";
import styled from "styled-components";

const MainFlexLocal = styled(MainFlex)`
  padding-bottom: 2em;
`
export class ThingsToDo extends React.Component {
  categories = [placesEat, placesDrink, placesDo];

  render() {
    return this.categories.map((category, i) => (
      <div key={i}>
        <MainFlexLocal wrap>
          <Box width={[1, 1 / 3]} p={.5}>
            <Img src={"/img/todo_" + (i + 1) +"_1.jpg"} />
          </Box>
          <Box width={[1, 1 / 3]} p={.5}>
            <Img src={"/img/todo_" + (i + 1) +"_2.jpg"} />
          </Box>
          <Box width={[1, 1 / 3]} p={.5}>
            <Img src={"/img/todo_" + (i + 1) +"_3.jpg"} />
          </Box>
        </MainFlexLocal>
        <MainFlexLocal>
          <Box width={1} p={[2, .5]}>
          {
            category.map(place => (
              <p key={place.name}>
                <strong>{place.name}</strong><br/>
                {!!place.body ? <>{place.body} <br/></> : null}
                {place.url ? <em><a href={"http://" + place.url} target="_blank">{place.url}</a></em> : null}
              </p>
            ))
          }
          {
            i === 1
            ? <p><em>Reservations are recommended for all winery visits.</em></p>
            : null
          }
          </Box>
        </MainFlexLocal>
      </div>
    ));
  }
}
