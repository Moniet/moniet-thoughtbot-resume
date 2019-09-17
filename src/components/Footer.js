import React from 'react'
import { colors } from '../utils/theme'
import styled from '@emotion/styled'

const Footer = styled.footer`
  position: relative;
  display: block;
  width: 100vw;
  padding: 3rem;
  background: ${colors.footerBg};
`
const List = styled.ul`
  display: flex;
  justify-content: space-around;
`
const ListItem = styled.li`
  a {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${colors.footerText};
    letter-spacing: 2px;
    &:hover {
      color: ${colors.primary};
    }
  }
`

export default () => (
  <Footer>
    <List>
      <ListItem>
        <a href='https://github.com/moniet'>Github</a>
      </ListItem>
      <ListItem>
        <a href='https://codepen.io/moniet'>Codepen</a>
      </ListItem>
      <ListItem>
        <a href='https://twitter.com/__moniet'>Twitter</a>
      </ListItem>
    </List>
  </Footer>
)
