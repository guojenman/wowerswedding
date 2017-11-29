import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Media from "react-media";
import { elastic as Menu } from "react-burger-menu";

const Container = styled.div`
  text-align: center;
  color: rgb(50, 50, 165);
  padding-top: 2.5em;
  padding-bottom: 8em;
  li {
    list-style: none;
  }
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
`
const ItemImage = styled.img`
  width: 2em;
  height: 2em;
  margin-right: .3em;
  vertical-align: text-bottom;
`

export class Header extends React.Component {
  
  stylesBurger = {
    bmBurgerButton: {
      position: 'fixed',
      width: '2rem',
      height: '2rem',
      right: '1rem',
      top: '1rem'
    },
    bmBurgerBars: {
      background: '#3232a5'
    },
    bmCrossButton: {
      height: '2rem',
      width: '2rem'
    },
    bmCross: {
      background: '#3232a5'
    },
    bmMenu: {
      background: '#fff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#fff'
    },
    bmItemList: {
      color: '#3232a5',
      padding: '0.8em'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  renderLinks() {
    return <>
      <li><Link to="/private/wedding"><ItemImage src="/img/nav/Navigation-Wedding.png" />WEDDING</Link></li>
      <li><Link to="/private/where-to-stay"><ItemImage src="/img/nav/Navigation-WhereToStay.png" />WHERE TO STAY</Link></li>
      <li><Link to="/private/things-to-do"><ItemImage src="/img/nav/Navigation-ThingsToDo.png" />THINGS TO DO</Link></li>
      <li><Link to="/private/other-events"><ItemImage src="/img/nav/Navigation-OtherEvents.png" />OTHER EVENTS</Link></li>
      <li><Link to="/private/registry"><ItemImage src="/img/nav/Navigation-Registry.png" />REGISTRY</Link></li>
      </>
  }
  render() {
    return (
      <Container>
        <Title>Amanda & Calvin</Title>
        <Media query={{ maxWidth: 700 }}>
          {match => (
            match
            ? <Menu right styles={this.stylesBurger} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>{this.renderLinks()}</Menu>
            : <ItemContainer>{this.renderLinks()}</ItemContainer>
          )}
        </Media>
      </Container>
    )
  }
}
