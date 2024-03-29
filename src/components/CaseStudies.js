/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import caseStudies from '../case-studies.json'
import { maxW, minW } from '../utils/responsiveUtils'

const Container = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
`
const Display = styled.div`
  position: sticky;
  display: block;
  top: 0;
  left: 0;
  flex-basis: 40vw;
  height: 100vh;

  ${maxW[3]} {
    display: none;
  }
`
const DefaultImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const IMG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
`

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  padding: 1.5rem;
  margin-top: 8rem;

  ${maxW[3]} {
    max-width: 600px;
    width: 100%;
    margin: 6rem auto;
  }
`

const Content = styled.div`
  max-width: 560px;
`

const Header = styled.div`
  margin-bottom: 6rem;

  h1 {
    font-weight: 500;
    color: ${colors.primary};
    margin-bottom: 1.5rem;
  }
  p {
    color: ${colors.text};
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  margin-bottom: 6rem;
`

const Link = styled.a`
  color: ${colors.text};

  &:hover {
    h4,
    h2 {
      color: red;
    }
  }

  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1.5em;
    color: ${colors.text};
  }

  h2 {
    font-weight: 300;
    font-size: 2.133em;
    text-transform: capital;
  }

  span {
    color: #9b9aa1;
  }
`

export default () => {
  const fadeIn = dataImg => {
    const img = document.querySelector(`img[data-img="${dataImg}"]`)
    img.style.opacity = 1
  }

  const fadeOut = dataImg => {
    const img = document.querySelector(`img[data-img="${dataImg}"]`)
    img.style.opacity = 0
  }

  return (
    <Container>
      <Display>
        <DefaultImg
          src={require('../assets/img/case-studies/default.svg')}
          alt=''
        />
        {caseStudies.map(cs => (
          <IMG
            src={require('../assets/img/case-studies/' + cs.img)}
            alt={cs.description}
            data-img={cs.img}
          />
        ))}
      </Display>
      <Projects>
        <Content>
          <Header>
            <h1>Case Studies</h1>
            <p>
              The following is a collection of self driven projects, a few of
              which were completed with pair programming while attending
              Flatiron School in London.
            </p>
          </Header>
          <List>
            {caseStudies.map((cs, i) => (
              <ListItem
                onMouseOver={e => fadeIn(cs.img)}
                onMouseLeave={e => fadeOut(cs.img)}
                key={i}
              >
                <Link href={cs.link} target='_blank'>
                  <h4>
                    {cs.title} <span> — {cs.tags.join(', ')}</span>{' '}
                  </h4>
                  <h2>{cs.description}</h2>
                </Link>
              </ListItem>
            ))}
          </List>
        </Content>
      </Projects>
    </Container>
  )
}
