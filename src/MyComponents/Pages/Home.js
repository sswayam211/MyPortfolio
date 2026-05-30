import React from 'react';
import Banner from "../Sections/Banner";
import HTML from '../Images/skill-html.png';
import CSS from '../Images/skill-css.png';
import JS from '../Images/skill-js.png';
import REACT from '../Images/skill-react.png';
import PHP from '../Images/skill-php.png';
import GITHUB from '../Images/skill-github.png';
import SQL from '../Images/skill-sql-server.png';
import LARAVEL from '../Images/skill-laravel.png';
import BOOTSTRAP from '../Images/skill-bootstrap.png';
import MORE from '../Images/skill-more.png';

const Home = () => {
    return (
        <>
            <div className="page ">

                <Banner></Banner>

                {/* about section  */}
                <section className="about-part mb-4">
                    <div className="heading mb-4">
                        <h2><sub>*</sub> About Me <sub>*</sub></h2>
                    </div>

                    <div className="content">
                        <p>
                            I’m Swayam Singh, a Full-Stack Web Developer with hands-on experience in building and maintaining modern web applications using PHP, Laravel, React, JavaScript, and MySQL. Currently working at Icontech Projects & Services, I specialize in developing responsive, user-focused, and performance-driven web solutions.
                            <br /><br />
                            I enjoy transforming ideas into scalable digital experiences through clean code and efficient development practices. With experience collaborating in team environments and working on production-level applications, I am continuously focused on improving my technical skills and delivering high-quality results.
                            <br /><br />
                            I’m passionate about web technologies, problem-solving, and creating applications that combine functionality with great user experience.
                        </p>
                    </div>
                </section>

                <hr />

                {/* skills section  */}
                <section className="skills mb-4">
                    <div className="heading mb-4">
                        <h2><sub>*</sub> Skills and Expertise <sub>*</sub></h2>
                    </div>

                    <div className="skill-content">
                        <div className="box">
                            <div className="box-content">
                                <img src={HTML} alt="HTML" />
                                <h4 className='text-center mt-4 '>HTML 5</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={CSS} alt="CSS" />
                                <h4 className='text-center mt-4 '>CSS 3</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={BOOTSTRAP} alt="BOOTSTRAP" />
                                <h4 className='text-center mt-4 '>Bootstrap</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={JS} alt="js" />
                                <h4 className='text-center mt-4 '>JavaScript</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={REACT} alt="react" />
                                <h4 className='text-center mt-4 '>React JS</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={PHP} alt="php" />
                                <h4 className='text-center mt-4 '>PHP</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={LARAVEL} alt="Laravel" />
                                <h4 className='text-center mt-4 '>Laravel</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={SQL} alt="sql" />
                                <h4 className='text-center mt-4 '>MySQL</h4>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <img src={GITHUB} alt="Github" style={{ filter: 'invert(1)' }} />
                                <h4 className='text-center mt-4 '>GitHub</h4>
                            </div>
                        </div>
                        <div className="box">
                            <a href="about">
                                <div className="box-content">
                                    <img src={MORE} alt="MORE" />
                                    <h4 className='text-center mt-4 '>More</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <hr />

                {/* experience section */}
                <section className="experience  mb-4">
                    <div className="heading mb-4">
                        <h2><sub>*</sub> Experience <sub>*</sub></h2>
                    </div>

                    <div className="experience-content">
                        <p>
                            Currently, I am working as a Software Application Trainee at Icontech Projects & Services Pvt. Ltd., Lucknow, where I develop and maintain full-stack web applications in a live production environment.
                            <br /><br />
                            I have over 1 and a half year of hands-on experience in web development, including internships and professional training. My expertise includes Full-Stack Web Development using PHP, Laravel, React, JavaScript, MySQL, HTML, CSS, and Bootstrap.
                            <br /><br />
                            I have experience in developing responsive user interfaces, building scalable back-end systems, optimizing website performance, debugging applications, and collaborating with development teams to deliver high-quality web solutions.</p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Home
