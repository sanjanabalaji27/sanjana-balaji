import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SANJANA BALAJI</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Experience</a></li>
        <li><a href="#experience">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sanjana-balaji-680973112/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/sanjanabalaji27" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sanjana Balaji. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer