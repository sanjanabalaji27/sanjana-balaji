import React from 'react'
import './experience.css'
import {FiCheck} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where I've Worked</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <article className="experience">
          <div className="experience__head">
            <h4>Systems Engineer</h4>
            <h4>Infosys Ltd.</h4>
            <h5 className='text-light'>(Dec 18 – Dec 20)</h5>
          </div>
          <ul className='experience__list'>
          <li>
            <FiCheck className='experience__list-icon'/>
            <p>
            Developed an end-to-end Warehouse Management web application using Angular 2 & Express 
            Framework
            </p>
            </li>
          <li>
          <FiCheck className='experience__list-icon'/>
            <p>
            Designed RESTful backend server with Nodejs to store and retrieve data from the database 
            with Sequelize ORM.
            </p>
            </li>
          <li>
          <FiCheck className='experience__list-icon'/>
            <p>
            Decreased code redundancies in the back-end by the implementation of stored procedures 
            and increasing the efficiency of the queries
            </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h4>Systems Engineer Trainee</h4>
            <h4>Infosys Ltd.</h4>
            <h5 className='text-light'>(Aug 18 – Dec 18)</h5>
          </div>
          <ul className='experience__list'>
          <li>
            <FiCheck className='experience__list-icon'/>
            <p>
            Designed and implemented a standard Invoicing and Billing Application using SAP ABAP, 
            Oracle SQL, Python and Front-End Frameworks – HTML 5, CSS 3 and Javascript.
            </p>
            </li>
          <li>
          <FiCheck className='experience__list-icon'/>
            <p>
            Incorporated Object-Oriented design and implemented Web services and micro-services to 
            identify fraudulent ecommerce orders.
            </p>
            </li>
          </ul>
        </article>
        <article className="experience">
          <div className="experience__head">
            <h4>Networking Intern</h4>
            <h4>Bharat Sachar Nigam Ltd.</h4>
            <h5 className='text-light'>(May 17 – July 17)</h5>
          </div>
          <ul className='experience__list'>
          <li>
            <FiCheck className='experience__list-icon'/>
            <p>
            Analyzed the working and optimization of the Wireless Sensor Networks.
            </p>
            </li>
          <li>
          <FiCheck className='experience__list-icon'/>
            <p>
            Engineered a strong design architecture for WSNs that maximized the 
            performance, link availability and reduced redundancy while also meeting the budgetary objectives.
            </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience