import React from 'react'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import About from './components/about/About'

const App = () => {
  return (
    <>
        <Header /> 
        <Nav />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}
export default App