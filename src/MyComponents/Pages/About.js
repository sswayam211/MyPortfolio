import React from 'react';
import HTML from '../Images/skill-html.png';
import CSS from '../Images/skill-css.png';
import JS from '../Images/skill-js.png';
import REACT from '../Images/skill-react.png';
import PHP from '../Images/skill-php.png';
import GITHUB from '../Images/skill-github.png';
import SQL from '../Images/skill-sql-server.png';
import LARAVEL from '../Images/skill-laravel.png';
import BOOTSTRAP from '../Images/skill-bootstrap.png';
import PYTHON from '../Images/skill-python.png';
import CANVA from '../Images/skill-canva.png';
import WORD from '../Images/skill-word.png';
import EXCEL from '../Images/skill-excel.png';
import POWERPOINT from '../Images/skill-powerpoint.png';

const About = () => {
    return (
        <div className='page'>
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
            <section className="skills mb-4" id='skills'>
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
                        <div className="box-content">
                            <img src={PYTHON} alt="PYTHON" />
                            <h4 className='text-center mt-4 '>Python</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <img src={CANVA} alt="canva" />
                            <h4 className='text-center mt-4 '>Canva</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <img src={EXCEL} alt="excal" />
                            <h4 className='text-center mt-4 '>MS Excel</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <img src={WORD} alt="word" />
                            <h4 className='text-center mt-4 '>MS Word</h4>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <img src={POWERPOINT} alt="powerpoint" />
                            <h4 className='text-center mt-4 '>MS Powerpoint</h4>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* Education section */}
            <section className="education  mb-4">
                <div className="heading mb-4">
                    <h2><sub>*</sub> Education <sub>*</sub></h2>
                </div>

                <div className="experience-content">
                    <p>
                        I completed my Bachelor of Computer Applications (BCA) from Mahatma Gandhi Kashi Vidyapith (MGKVP) in 2024, where I built a strong foundation in programming, database management, and web development concepts.
                        <br /><br />
                        Currently, I am pursuing a Master of Computer Applications (MCA) from Dr. A.P.J. Abdul Kalam Technical University (AKTU) to further strengthen my technical expertise and deepen my understanding of modern software development technologies.
                        <br /><br />
                        My academic journey, combined with practical industry experience, has helped me develop strong analytical, problem-solving, and software development skills. I am continuously focused on learning new technologies and improving my abilities as a Full-Stack Web Developer.
                    </p>
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
                        Over the course of my professional journey, I have gained hands-on experience in full-stack web development through internships and full-time roles in the software industry. Currently working as a Software Application Trainee at Icontech Projects & Services Pvt. Ltd., I develop and maintain production-level web applications using Laravel, PHP, React, and MySQL.
                        <br /><br />
                        My experience includes building responsive and user-friendly interfaces, optimizing application performance, debugging complex issues, and collaborating with development and design teams to deliver scalable web solutions. I have worked on both front-end and back-end development, contributing to live projects while following clean coding practices and maintaining code quality standards.
                        <br /><br />
                        Previously, as a Web Application Intern, I worked on multiple live web projects where I improved application stability, enhanced UI/UX, and implemented responsive designs using Bootstrap. I also completed web development training at Unified Mentor, where I strengthened my foundation in HTML, CSS, JavaScript, and debugging techniques.
                        <br /><br />
                        Through these experiences, I have developed strong problem-solving abilities, teamwork skills, and a practical understanding of modern web development workflows.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default About
