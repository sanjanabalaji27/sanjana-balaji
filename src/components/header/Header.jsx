import React from 'react'
import CTA from './CTA'
import Sanjana from '../../assets/sanjana.png'
import HeaderSocials from './HeaderSocials'
import './header.css' 

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sanjana Balaji</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="sanjana">
          <img src={Sanjana} alt="sanjana" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header