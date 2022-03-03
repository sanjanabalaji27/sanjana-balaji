import React from 'react'
import './about.css'
import Sanjana from'../../assets/sanjana-about.jpg'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsCalendar2Date} from 'react-icons/bs'
import {FiAward} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Sanjana} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdOutlineMailOutline className='about__icon'/>
              <h5>E-Mail ID</h5>
              <small>sanjanabalajee@gmail.com</small>
            </article>

            <article className='about__card'>
              <BsCalendar2Date className='about__icon'/>
              <h5>Date Of Birth</h5>
              <small>27 November 1995</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>
          </div>

          <p>
            Hello! I'm Sanjana and I'm a software developer, currently pursuing my Master's in Information Technology.
            I am highly skilled at programming and I've a work experience of 2 years where I've had the privilege of working for 
            a bunch of different clients. Currently, I'm actively looking for Summer'22 Internships/Full time software engineer positions. 
            If you think I'm a good fit, please contact me via the link below.
            
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About
