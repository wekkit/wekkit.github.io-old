import React from 'react'
import '../styles/global.css'
import '../styles/skills-bg.css'
import '../styles/devicons.min.css'
import '../styles/fontawesome.min.css'

import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
// import Nav from "../components/Nav"
// import Portfolio from "../components/portfolio/Portfolio.js"
// import Resume from "../components/resume/Resume.js"
// import CV from "../components/resume/CV.js"

// import * as portfolio from "../portfolio.json"
// const portfolioData = portfolio.default
// const devData = portfolioData.filter(proj => proj.type === "dev")
// const gameData = portfolioData.filter(proj => proj.type === "game")
// const uxData = portfolioData.filter(proj => proj.type === "ux")
// const videoData = portfolioData.filter(proj => proj.type === "video")

export default function App() {
  return (
    <>
      <Hero />
      <About />
      {/* <Nav />
      <Element name="portfolio">
        <h1>Personal Portfolio</h1>
        <Portfolio title="Development" data={devData} />
        <Portfolio title="UX Design" data={uxData} />
        <Portfolio title="Game Design" data={gameData} />
        <Portfolio title="Video" data={videoData} />
      </Element>
      <Element name="resume">
        <h1>Resume / Skills</h1>
        <CV />
        <Resume />
      </Element> */}
      <Contact />
    </>
  )
}
