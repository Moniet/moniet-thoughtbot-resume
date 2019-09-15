import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'

const Button = styled.button`
  background-color: ${colors.primary};
  border: 1px solid #ce2d2d;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Calibre', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.9;
  min-height: 3rem;
  min-width: 9rem;
  padding: 0.375rem 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms ease-in-out, box-shadow 300ms ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
`

export default children => {
  return <Button>{children}</Button>
}
