import React from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <section>
        <h1>About Me</h1>
        {/* <br /> */}
        <p>Hi, I'm <span style={{ textDecoration: "underline" }}><Link
          to="https://www.instagram.com/11swayam12/?next=%2F&hl=en">SWAYAM SINGH</Link></span>, a Web
          Developer from Varanasi,UTTAR PRADESH.I specialize in creating dynamic and beautiful web pages.I
          have been in the field for more than a years or 1 and half years and have loved every minute of it.
        </p>
      </section>

      <section id="experience">
            <h2 >Background and Experience</h2>
            <p>I have completed my Bachelor's degree in Computer Science from Jeevandeep Institute of Management & technology
                affiliated by Mahatma Gandhi Kashi Vidyapeeth(MGKVP) in late 2024. Over the past 1 years, I have honed my skills in
                Web Development.</p>
        </section>

        <section id="skills">
            <h2 >Skills and Expertise</h2>
            <ul>
                <li>C language</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT.JS</li>
                <li>FRONTEND WEB DEVELOPMENT</li>
                <li>SQL</li>
                <li>PHP</li>
                <li>NODE.JS</li>
                <li>BACKEND DEVELOPMENT</li>
                <li>FULL STACK DEVELOPMENT</li>
                <li>PYTHON</li>
                <li>GITHUB</li>
            </ul>
        </section>

        <section id="skills">
            <h2 >Especially Skilled in</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>FRONTEND WEB DEVELOPMENT</li>
            </ul>
        </section>

        <section id="interests">
            <h2 >Personal Interests</h2>
            <p>When I'm not working, I enjoy walking on streets, hanging out with friends, and playing cricket.</p>
        </section>

        <section id="contact">
            <h2 >Get in Touch</h2>
            <p>If you'd like to work with me or just say hello, feel free to <span style={{textDecoration: "underline"}}><Link to="/contact" style={{color: "rgb(245, 249, 5)"}}>get in touch</Link></span>.
            </p>
        </section>
        <br /><br /><br />
    </div>
  )
}

export default About
