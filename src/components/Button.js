import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'

const Button = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 2px;
  cursor: pointer;
  min-height: 3rem;
  min-width: 9rem;
  padding: 0.375rem 1.5rem;
  text-align: center;
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;

  a {
    color: #fff;
    font-family: 'Calibre', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.9;
    transition: opacity 150ms ease-in-out;
    vertical-align: middle;
    padding: 0;
    &:hover {
      opacity: 0.8;
      color: white;
    }
  }
`

export default ({ children }) => {
  return <Button>{children}</Button>
}
