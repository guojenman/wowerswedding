import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  color: rgb(50, 50, 165);
  padding-top: 2.5em;
  padding-bottom: 8em;
`
const Title = styled.h1`
  font-size: 2.75em;
  font-weight: 100;
`
const ItemContainer = styled.ul`
  font-weight: 300;
  font-size: 0.75em;
  li {
    display: inline-block;
  }
  li:not(:last-of-type) {
    margin-right: 2.25em;
  }
  a {
    color: inherit;
    text-decoration: none;
    line-height: 2em;
    letter-spacing: 0.05em;
  }
`
const ItemImage = styled.img`
  width: 2em;
  height: 2em;
  margin-right: .3em;
  vertical-align: text-bottom;
`

export class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>Amanda & Calvin</Title>
        <ItemContainer>
          <li><Link to="/private/wedding"><ItemImage src="/img/nav/Navigation-Wedding.png" />WEDDING</Link></li>
          <li><Link to="/private/where-to-stay"><ItemImage src="/img/nav/Navigation-WhereToStay.png" />WHERE TO STAY</Link></li>
          <li><Link to="/private/things-to-do"><ItemImage src="/img/nav/Navigation-ThingsToDo.png" />THINGS TO DO</Link></li>
          <li><Link to="/private/other-events"><ItemImage src="/img/nav/Navigation-OtherEvents.png" />OTHER EVENTS</Link></li>
          <li><Link to="/private/registry"><ItemImage src="/img/nav/Navigation-Registry.png" />REGISTRY</Link></li>
        </ItemContainer>
      </Container>
    )
  }
}
