import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import Button from './Button'

const Intro = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 5vw;
  margin: 0 auto;
  height: 100vh;
  width: 90vw;
`

const Greeting = styled.div`
  display: block;
  flex-basis: 40vw;

  h1 {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h1,
  p {
    color: ${colors.text};
  }
`

const Artwork = styled.div`
  position: relative;
  display: block;
  flex-basis: 50vw;
`

export default () => (
  <section>
    <Intro>
      <Greeting>
        <h1>Hi There, I'm Moniet, a Full Stack Developer.</h1>
        <p>
          I build applications super quick with the power of Ruby on Rails and
          supercharge the front end with React <mark></mark>
        </p>
        <p>
          Having a background, I am enabled as a creative thinker have an
          immense passion when it comes to the subtleties of design.
        </p>
        <Button>
          <a href='/case-studies'>See what I've Made</a>
        </Button>
      </Greeting>
      <Artwork></Artwork>
    </Intro>
  </section>
)
