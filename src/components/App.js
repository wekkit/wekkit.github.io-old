import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../styles.css'
import '../skills-bg.css'

import Hero from './Hero'
import About from './About'
import Nav from './Nav'
import Contact from './Contact'
import Portfolio from './portfolio/Portfolio.js'
import Resume from './resume/Resume.js'
import CV from './resume/CV.js'

import * as portfolio from '../portfolio.json'
const portfolioData = portfolio.default
const devData = portfolioData.filter(proj => proj.type === 'dev')
const gameData = portfolioData.filter(proj => proj.type === 'game')
const uxData = portfolioData.filter(proj => proj.type === 'ux')
const videoData = portfolioData.filter(proj => proj.type === 'video')

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Nav />
        <Element name='portfolio'>
          <h1>Portfolio</h1>
          <Portfolio title='Web Development' data={devData}/>
          <Portfolio title='UX Design' data={uxData}/>
          <Portfolio title='Game Design' data={gameData}/>
          <Portfolio title='Video' data={videoData}/>
        </Element>
        <Element name='resume'>
          <h1>Resume / Skills</h1>
          <CV />
          <Resume />
        </Element>
        <Element name='contact'>
          <Contact />
        </Element>
      </div>
    )
  }
}

export default App