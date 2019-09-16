/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled'
import { colors } from '../utils/theme'
import caseStudies from '../case-studies.json'

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`
const Display = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  flex-basis: 40vw;
  height: 100vh;
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
  margin-top: 12rem;
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
  margin-bottom: 3rem;
`

const Link = styled.a`
  h4 {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.75em;
    color: ${colors.text};
  }

  span {
    color: #9b9aa1;
  }
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
              I am mostly self taught, however, recently I have graduated from a
              coding bootcamp. These projects represent work I have taken on for
              experience, for practice, and as a part of group projects during
              the bootcamp.
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
