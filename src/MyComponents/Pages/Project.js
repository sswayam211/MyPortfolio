import React from 'react';
import QRhos from '../Images/QR-hos.jpeg';
import QRfin from '../Images/QR-fin.jpeg';
import ssFin from '../Images/ss-fin1.png';
import ssHos1 from '../Images/ss-hos1.png';
import ssHos2 from '../Images/ss-hos2.png';
import ssHos3 from '../Images/ss-hos3.png';
import todo1 from '../Images/todo-1.png';
import todoQR from '../Images/todoslist-QR.png';
import STBAQR from '../Images/STBA-QR.png';
import STBA1 from '../Images/stba-1.png';
import STBA2 from '../Images/stba-2.png';
import STBA3 from '../Images/stba-3.png';
import STBA4 from '../Images/stba-4.png';
import STBA5 from '../Images/stba-5.png';
import STBA6 from '../Images/stba-6.png';


const Project = () => {
  return (
    <div id='Project'>
      <div className="details">
      <h2>My Projects</h2>
        <p>
          {/* During my academic session,I worked on 2 projects.Both are Web Based,one of them is only FrontEnd while the other one is Full-Stack(both FrontEnd and BackEnd).I've uploaded both my projects on GitHub.As GitHub doesn't run any BackEnd code, so i have shared pictures which shows how BackEnd code works.<br /> */}
          I have worked on 2 projects when I was in college, 1st one is Finexo(a website which only displays basic frontend skills of mine), and 2nd one is a Hospital Website(it's a full stack website you can get the details below).These are my college projects. <br/>
          I also worked on 2 more projects, 1st one is To-Do's List web application and 2nd one is a Student-Teacher Booking Appointment web application. <br/><br/>
        </p>
      </div>

    <hr/>

      <section>
        <div className="project">
          <div className="col-1">
            <div className="col-1-1">
              <h2>FINEXO</h2>
              <p>It's a simple WebSite,which is totally based on FrontEnd.</p>
              <p>Languages I used in this project are :</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
              </ul>
            </div>
            <div className="col-1-2">
              <a href="https://sswayam211.github.io/Finexo/"><img src={QRfin}
                alt="finexo_QR_code" />
                <p>
                  Scan or Click on the QR to visit demo website
                </p>
              </a>
            </div>
          </div>

          <div className="col-2">
            <p>This is the landing page of website : </p>
            <img src={ssFin} alt="" />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="project">
          <div className="col-1">
            <div className="col-1-1">
              <h2>HOSPITAL</h2>
              <p>It's a WebSite of a Hospital,In this website i work on both FrontEnd and BackEnd Development.
              </p>
              <p>Languages I used in this project are :</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>PHP</li>
                <li>MYSQL FOR DATABASES</li>
              </ul>
            </div>
            <div className="col-1-2">
              <a href="https://sswayam211.github.io/Hospital/"><img src={QRhos} alt="hospital-QR_code" />
                <p>
                  Scan or Click on the QR to visit demo website
                </p>
              </a>
            </div>
          </div>
          <div className="col-2">
            <p>1. This is the landing page of website :</p>
            <img src={ssHos1} alt="hos-1" />
            <p>2. This is the page for Booking Appointments online :</p>
            <img src={ssHos2} alt="hos-2" />
            <p>3. This happens when someone succesfully book their appointment : </p>
            <img src={ssHos3} alt="hos-3" />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="project">
          <div className="col-1">
            <div className="col-1-1">
              <h2>To-Do's List</h2>
              <p>
                This is a web application,used to store tasks which people wants to do.<br/>In this application users can add, see, and delete tasks when the are completed, And also they can freely reloade there browser without losing their previously added tasks.
              </p>
              <p>Languages I used in this project are :</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>REACT JS</li>
              </ul>
            </div>
            <div className="col-1-2">
              <a href="https://sswayam211.github.io/todolist/"><img src={todoQR} alt="To-Do's List QR_code" />
                <p>
                  Scan or Click on the QR to visit demo website
                </p>
              </a>
            </div>
          </div>
          <div className="col-2">
            <p>1. This is the landing page of application :</p>
            <img src={todo1} alt="todos1" />
          </div>
        </div>
      </section>

      <hr />

      <section>
        <div className="project">
          <div className="col-1">
            <div className="col-1-1">
              <h2>Student-Teacher Booking Appointment</h2>
              <p>
                This is a web application, which can used by students and teacher.Where students can book appointments to teachers and can also send messages,teachers can schedule or cancel appointment, and can see messages sent by students.
              </p>
              <p>Languages I used in this project are :</p>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>REACT JS</li>
                <li>NODE JS</li>
                <li>EXPRESS JS</li>
                <li>MYSQL FOR DATABASES</li>
              </ul>
            </div>
            <div className="col-1-2">
              <a href="https://sswayam211.github.io/STBA/"><img src={STBAQR} alt="To-Do's List QR_code" />
                <p>
                  Scan or Click on the QR to visit demo website
                </p>
              </a>
            </div>
          </div>
          <div className="col-2">
            <p>1. This is the landing page of application :</p>
            <img src={STBA1} alt="stba1" />
            <p>2. This is the login page of application :</p>
            <img src={STBA2} alt="stba2" />
            <p>3. This is the new registration page of application :</p>
            <img src={STBA3} alt="stba3" />
            <p>4. This is the admin account page of application :</p>
            <img src={STBA4} alt="stba4" />
            <p>5. This is the teacher's account page of application :</p>
            <img src={STBA5} alt="stba5" />
            <p>6. This is the student's account page of application :</p>
            <img src={STBA6} alt="stba6" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Project
