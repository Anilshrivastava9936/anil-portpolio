import React from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Hero from './HeroSection'
import About from './About'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Projects/>
        <Contact/>
      <About/>
    </div>
  )
}
