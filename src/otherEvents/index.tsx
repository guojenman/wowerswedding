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
          Welcome Drinks and Barbecue<br/><br/>
          Friday, May 11, 5:30 to 8:30 pm<br/>
          The Hilltop, Carneros Resort and Spa<br/>
          <em><a href="https://www.google.com/maps/place/Carneros+Resort+and+Spa/@38.255471,-122.3371205,17z/data=!4m5!3m4!1s0x808507e03777f8eb:0x720d3f5cc7fbec95!8m2!3d38.2554723!4d-122.3349422" target="_blank">4048 Sonoma Highway, Napa, California</a></em>
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
          Sunday, May 13, 10:00 am to 12:00 pm<br/>
          Carneros Courtyard, Carneros Resort and Spa<br/>
          <em><a href="https://www.google.com/maps/place/Carneros+Resort+and+Spa/@38.255471,-122.3371205,17z/data=!4m5!3m4!1s0x808507e03777f8eb:0x720d3f5cc7fbec95!8m2!3d38.2554723!4d-122.3349422" target="_blank">4048 Sonoma Highway, Napa, California</a></em>
          </Paragraph>
          </Grid>
        </MainFlexLocal2>
      </>
    )
  }
}
