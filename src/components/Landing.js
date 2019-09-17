/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { keyframes, jsx } from '@emotion/core'
import { colors } from '../utils/theme'
import Button from './Button'
import { Link } from 'react-router-dom'
import { maxW, minW } from '../utils/responsiveUtils'

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

  ${maxW[1]} {
    height: 90vh;
  }

  ${maxW[2]} {
    height: 80vh;
  }

  ${maxW[3]} {
    flex-flow: column nowrap;
    margin-top: 2rem;
    max-width: 560px;
    width: 100%;
    position: relative;
    padding: 2rem;
    margin: 2rem auto;
    left: 0;
  }
`

const Greeting = styled.div`
  display: block;
  width: 40%;

  ${maxW[3]} {
    min-width: 100%;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h1,
  p {
    color: ${colors.text};
  }

  div > a {
    font-weight: 500;
    font-size: 1.2rem;
  }
`

/* ARTWORK COMPONENTS */

const astroFloat = keyframes`
  50% {
    transform: translateY(-10px) rotate(-10deg);
  }
`
const planetFloat = keyframes`
  50% {
    transform: translateY(-10px);
  }
`

const Artwork = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 50vw;

  ${maxW[3]} {
    width: 100%;
  }

  ${maxW[2]} {
    margin-top: 3rem;
  }
`

const Planet = styled.img`
  width: 25%;
  height: auto;
  z-index: 50;
  animation: ${planetFloat} 3s ease-in-out 0.7s infinite;

  ${maxW[3]} {
    width: 40%;
  }
`

const Astronaut = styled.img`
  width: 50%;
  transform: rotate(-10deg);
  z-index: 100;
  animation: ${astroFloat} 3s ease-in-out infinite;
  opacity: 0.75;
  ${maxW[3]} {
    width: 65%;
  }
`

const stackColors = color => {
  // coloring relevant technologies for the stack i use (Rails & React)
  return {
    color: color,
    fontStyle: 'italic',
    fontWeight: '500'
  }
}

export default () => (
  <>
    <section>
      <Intro>
        <Greeting>
          <h1>Hi There, I'm Moniet, a Full Stack Developer.</h1>
          <p>
            I build applications super quick with the power of
            <span css={stackColors(colors.primary)}> Ruby on Rails </span> and
            supercharge the front end with
            <span css={stackColors('#61DAFB')}> React </span>
          </p>
          <p>
            Having a background in music, I am enabled as a creative thinker and
            have an immense passion when it comes to combing the worlds of
            design and development.
          </p>
          <Button>
            <Link to='/case-studies'>See what I've Made</Link>
          </Button>
        </Greeting>
        <Artwork>
          <Planet src={require('../assets/img/planet.svg')} />
          <Astronaut src={require('../assets/img/astronaut.svg')} />
        </Artwork>
      </Intro>
    </section>
  </>
)
