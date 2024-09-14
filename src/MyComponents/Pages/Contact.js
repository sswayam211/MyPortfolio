import React from 'react';
import instalogo from '../Images/insta-logo.png';
import whatsUplogo from '../Images/whatsup-logo.png';
import linkedInlogo from '../Images/linkde_in-logo.png';

const Contact = () => {
  return (
    <div className='contact'>

      <section>

        <div className="col-1">
          <h2>Get in Touch</h2>
          <p>If you'd like to work with me or just want to say hello, feel free to contact me
          </p>
        </div>

        <div className="col-2">
          <div className="contact-links">
            <a href="https://www.instagram.com/11swayam12/?next=%2F&hl=en">
              <img src={instalogo} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/swayam-singh-5734352b8" alt="Linked In">
              <img src={linkedInlogo} alt="linkedIn" />
            </a>
            <a href="https://wa.me/7905341874">
              <img src={whatsUplogo} alt="Whats Up" />
            </a>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Contact
