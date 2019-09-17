import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import { maxW } from '../utils/responsiveUtils'

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  align-items: center;
  flex-wrap: wrap;

  ${maxW[3]} {
    height: 100%;
  }
`
const ImgContainer = styled.div`
  display: block;
  position: relative;
  width: 40%;
  height: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${maxW[3]} {
    width: 100vw;
    height: 30vh;
  }
`
const Stack = styled.div`
  flex-grow: 1;
  width: 60%;
  display: flex;
  justify-content: center;
  h1 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    color: ${colors.primary};
  }

  ${maxW[3]} {
    padding: 2rem;
    width: 100%;
  }
`

const Info = styled.div`
  display: block;
  max-width: 560px;
`
const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 3rem;

  ${maxW[1]} {
    flex-flow: column wrap;
  }
`
const GridItem = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-bottom: 1.5rem;
`

const GridContent = styled.div`
  margin-left: 1em;

  h2 {
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 0.75rem;
    letter-spacing: 1px;
    color: ${props => props.headerColor};
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    margin-bottom: 0.5em;
    color: #5a5b60;
  }

  li span {
    border-bottom: solid 1px rgba(181, 181, 192, 0.5);
  }
`

const Icon = styled.div`
  width: 2em;
  height: 2em;
  transform: translateY(-20%);
  img {
    width: 100%;
    height: auto;
  }
`

export default () => (
  <Container>
    <ImgContainer>
      <img src={require('../assets/img/space-art.svg')} alt='' />
    </ImgContainer>
    <Stack>
      <Info>
        <h1>Technologies I love using.</h1>
        <p>
          My process of building applications often starts with developing
          wireframes based on user stories. This allows me to think of user
          experience and visualise relationships between the various components.
          I believe that design is not only how something looks, but also how it
          works.
        </p>

        <Grid>
          <GridItem>
            <Icon>
              <img
                src={require('../assets/img/icons/technology-icon.svg')}
                alt=''
              />
            </Icon>
            <GridContent headerColor='#177be3'>
              <h2>LANGUAGES</h2>
              <ul>
                <li>
                  <span>Ruby</span>
                </li>
                <li>
                  <span>HTML</span>
                </li>
                <li>
                  <span>SVG</span>
                </li>
                <li>
                  <span>CSS & SCSS</span>
                </li>
                <li>
                  <span>JavaScript</span>
                </li>
              </ul>
            </GridContent>
          </GridItem>
          <GridItem>
            <Icon>
              <img
                src={require('../assets/img/icons/frameworks-icon.svg')}
                alt=''
              />
            </Icon>
            <GridContent headerColor={colors.primary}>
              <h2>FRAMEWORKS</h2>
              <ul>
                <li>
                  <span>React</span>
                </li>
                <li>
                  <span>Ruby on Rails</span>
                </li>
                <li>
                  <span>GSAP</span>
                </li>
                <li>
                  <span>Bootstrap</span>
                </li>
              </ul>
            </GridContent>
          </GridItem>
          <GridItem>
            <Icon>
              <img src={require('../assets/img/icons/ux-icon.svg')} alt='' />
            </Icon>
            <GridContent headerColor='#ff931e'>
              <h2>SOFTWARE</h2>
              <ul>
                <li>
                  <span>Trello</span>
                </li>
                <li>
                  <span>GIMP</span>
                </li>
                <li>
                  <span>Adobe XD</span>
                </li>
                <li>
                  <span>Affinity Designer</span>
                </li>
              </ul>
            </GridContent>
          </GridItem>
        </Grid>
      </Info>
    </Stack>
  </Container>
)
