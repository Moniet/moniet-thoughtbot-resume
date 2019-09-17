import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import styled from '@emotion/styled'
import Button from './components/Button'
import Nav from './components/Nav'
import Landing from './components/Landing'
import TechStack from './components/TechStack'
import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'

const Main = styled.main`
  display: block;
  min-height: 100vh;
  max-height: 100%;
`

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main>
        <Route exact path='/' component={Landing} />
        <Route exact path='/tech-stack' component={TechStack} />
        <Route exact path='/case-studies' component={CaseStudies} />
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
