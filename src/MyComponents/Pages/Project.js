import React from 'react';
import TODO from "../Images/todo-1.jpg";
import STBA from "../Images/stba-1.jpg";
import GSTIG from "../Images/GSTIG-1.jpg";
import LMS from "../Images/LMS-1.jpg";

const Project = () => {
    return (
        <div className='page' id='projects'>
            <div className="heading mb-4">
                <h2><sub>*</sub> Projects <sub>*</sub></h2>
            </div>

            <div className="project-list">

                <div className="project-box py-3">
                    <div className="project-content row">
                        <div className="project-img col-lg-5">
                            <img src={LMS} alt="project-1" className='img-fluid' />
                        </div>
                        <div className="project-details col-lg-7">
                            <h3 className="heading">1. Library Management System</h3>
                            <p>
                                Library Management System is a web application, which can we used to manage books in library.
                                <br />
                                We can manage the recordes of users, books, issued books and the date the books are going to be returned by the user and many more, this application provide a complete dashboard to do all that.
                                <br />
                                It's a complete Full stack application, build in Core PHP and MySQL database is used.
                            </p>
                            <div className="project-button d-flex">
                                <a href="https://sswayam211.github.io/LMS/" target='/blank'><button className='button m-1' type='button'>Demo</button></a>
                                <a href="https://github.com/sswayam211/LMS" target='/blank'><button className='button m-1' type='button'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="project-box py-3">
                    <div className="project-content row">
                        <div className="project-img col-lg-5">
                            <img src={GSTIG} alt="project-1" className='img-fluid' />
                        </div>
                        <div className="project-details col-lg-7">
                            <h3 className="heading">2. GST Invoice Generator</h3>
                            <p>
                                It is a web application, which can we used to generate invoice of the sales online.
                                <br />
                                User can add products, customers, and salesmans for fast processing of the invoice and also see the history of the invoice generated earlier, this application provide a complete dashboard to do all that.
                                <br />
                                It's a complete full-stack application build using Core PHP and MySQL database is used.
                            </p>
                            <div className="project-button d-flex">
                                <a href="https://sswayam211.github.io/BrowzInvoice/" target='/blank'><button className='button m-1' type='button'>Demo</button></a>
                                <a href="https://github.com/sswayam211/BrowzInvoice" target='/blank'><button className='button m-1' type='button'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-box py-3">
                    <div className="project-content row">
                        <div className="project-img col-lg-5">
                            <img src={TODO} alt="project-1" className='img-fluid' />
                        </div>
                        <div className="project-details col-lg-7">
                            <h3 className="heading">3. Todo List</h3>
                            <p>
                                Todos list is a web application, which can we used to save things that we need to do.
                                <br />
                                This application does not use any database to save To-Do's, it simply uses browser's local storage to save todo's. User can add, view and delete todo when it's completed.
                                <br />
                                It's a complete frontend application build using HTML, CSS, and React Js.
                            </p>
                            <div className="project-button d-flex">
                                <a href="https://sswayam211.github.io/todolist/" target='/blank'><button className='button m-1' type='button'>Demo</button></a>
                                <a href="https://github.com/sswayam211/todolist" target='/blank'><button className='button m-1' type='button'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-box py-3">
                    <div className="project-content row">
                        <div className="project-img col-lg-5">
                            <img src={STBA} alt="project-2" className='img-fluid' />
                        </div>
                        <div className="project-details col-lg-7">

                            <h3 className="heading">4. Student-Teacher Booking Appointment</h3>
                            <p>Student-Teacher Booking Appointment is a web application, It can be used by Students and Teachers.
                                <br />
                                Students can search for their desired teacher, and can also book appointment or ask any question by sending a message to them.
                                <br />
                                As for Teachers, they can accept or reject student's appointment requests and schedule them and also see messages send by students.
                                <br />
                                This is a full-stack application which uses database to store student's and teacher's data, and also for authentication purpose.This application is build using HTML, CSS, React Js, Node Js, Express Js and MySQL.
                            </p>
                            <div className="project-button d-flex">
                                <a href="https://sswayam211.github.io/STBA/"><button className='button m-1' type='button'>Demo</button></a>
                                <a href="https://github.com/sswayam211/STBA"><button className='button m-1' type='button'>Code</button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Project
