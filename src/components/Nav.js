import React, { useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import { minW, maxW } from '../utils/responsiveUtils'

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5em 3em;
  width: 100vw;
  z-index: 2000;

  ${maxW[2]} {
    background: white;
    padding: 1.5rem;
  }
`

const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${maxW[2]} {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 1.5rem 0 0;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.07);
    transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
    transform: ${props =>
      props.menuToggled ? 'translateY(67px)' : 'translateY(-100%)'};
    opacity: ${props => (props.menuToggled ? 1 : 0)};
  }
`

const ListItem = styled.li`
  margin-right: 1.5rem;
  ${maxW[2]} {
    margin: 0 0 2.133rem;
  }

  &:last-of-type {
    margin-right: 0;
  }

  a {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.25px;
    color: ${colors.text};
    transition: color 150ms ease-in-out, border-color 150ms ease-in-out;
    padding-bottom: 4px;

    &:hover {
      color: ${colors.primary};
      transition: duration;
      border-color: rgba(224, 49, 49, 0.6);
    }
  }
`

const Hamburger = styled.div`
  width: 1.25em;
  height: auto;
  align-self: center;
  display: block;
  z-index: 10;

  ${minW[2]} {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`

export default () => {
  const [menuToggled, toggleMenu] = useState(false)

  return (
    <Nav>
      <Hamburger onClick={() => toggleMenu(!menuToggled)}>
        <img src={require('../assets/img/icons/menu.svg')} alt='menu icon' />
      </Hamburger>
      <Logo />
      <List menuToggled={menuToggled}>
        <ListItem>
          <NavLink to='/tech-stack'>Tech Stack</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to='/case-studies'>Case Studies</NavLink>
        </ListItem>
        <ListItem>
          <Button>
            <a href='mailto:moniet.sawhney@gmail.com'>Contact Me</a>
          </Button>
        </ListItem>
      </List>
    </Nav>
  )
}
