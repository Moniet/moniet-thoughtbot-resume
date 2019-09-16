import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import styled from '@emotion/styled'
import Button from './components/Button'
import Nav from './components/Nav'
import Landing from './components/Landing'
import TechStack from './components/TechStack'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Route exact path='/' component={Landing} />
        <Route exact path='/tech-stack' component={TechStack} />
      </main>
    </BrowserRouter>
  )
}

export default App
