import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import styled from '@emotion/styled'
import Button from './components/Button'
import Nav from './components/Nav'
import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Route path='/' component={Landing} />
      </main>
    </BrowserRouter>
  )
}

export default App
