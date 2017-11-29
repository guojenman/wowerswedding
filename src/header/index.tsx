import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Media from "react-media";
import { elastic as Menu } from "react-burger-menu";

const Container = styled.div`
  z-index: 1;
  color: rgb(50, 50, 165);
  width: 100%;
  height: 16em;
  background: #fff;
  text-align: center;
  li {
    list-style: none;
  }

  @media (max-width: 700px) {
    height: 6em;
  }
`
const Title = styled.h1`
  padding-top: 1em;
  font-size: 2.75em;
  font-weight: 100;
  @media (max-width: 700px) {
    padding-top: 0.5em;
    font-size: 2.25em;
  }
  @media (max-width: 400px) {
    padding-top: 0.75em;
    font-size: 1.8em;
  }
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
      left: '1rem',
      top: '2rem'
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
      padding: '1em 1em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#fff'
    },
    bmItemList: {
      color: '#3232a5',
      padding: '0.8rem'
    },
    bmOverlay: {
      background: 'rgba(50, 50, 165, 0.3)'
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
        <Media query={{ maxWidth: 700 }}>
          {match => (
            match
            ? <Menu styles={this.stylesBurger} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>{this.renderLinks()}</Menu>
            : null
          )}
        </Media>
        <Title>Amanda & Calvin</Title>
        <Media query={{ maxWidth: 700 }}>
          {match => (
            match
            ? null
            : <ItemContainer>{this.renderLinks()}</ItemContainer>
          )}
        </Media>
      </Container>
    )
  }
}
