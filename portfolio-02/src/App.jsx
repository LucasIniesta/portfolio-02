import { useState } from 'react'
import './App.css'
import Header from './components/sections/Header'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Techs from './components/sections/Techs'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div>
      <Header/>
      <Projects/>
      <About/>
      <Techs/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
