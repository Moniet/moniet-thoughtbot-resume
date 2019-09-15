import React from 'react'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/core'
import { colors } from '../utils/theme'
import { Router, NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1.5em 3em;
  width: 100vw;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItem = styled.li`
  margin-right: 1.5em;

  a {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.25px;
    color: ${colors.text};
    transition: color 150ms ease-in-out, border-color 150ms ease-in-out;
    padding-bottom: 4px;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      color: ${colors.primary};
      transition: duration;
      border-color: rgba(224, 49, 49, 0.6);
    }
  }
`

export default () => {
  return (
    <Nav>
      <Logo />
      <List>
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
