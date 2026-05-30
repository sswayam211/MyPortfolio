import React, { useState, useEffect } from 'react';
import My_Img from "../Images/my2.jpg";

const Banner = () => {

    const Name = "Swayam Singh";

    const [animatedName, setAnimatedName] = useState('');
    const [index, setIndex] = useState(0);

    const [scrollY, setScrollY] = useState(0);

    // Typing animation
    useEffect(() => {
        if (index < Name.length) {

            const timeout = setTimeout(() => {
                setAnimatedName((prev) => prev + Name[index]);
                setIndex(index + 1);
            }, 150);

            return () => clearTimeout(timeout);
        }
    }, [index]);



    // Scroll animation
    useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <div className='banner'>

            {/* LEFT CONTENT */}
            <div
                className="banner-intro-part"
                style={{
                    transform: `translateX(-${scrollY * 1}px)`,
                    transition: "transform 0.1s linear"
                }}
            >

                <h5>
                    Hello! Welcome to my portfolio,
                </h5>

                <h1>
                    I’m <span className='name-intro'>{animatedName}</span>,
                </h1>

                <h5>
                    A Full-Stack Web Developer dedicated to building professional,
                    scalable, and interactive websites and web applications.
                </h5>

                <div className="social-links">
                    <a href="https://wa.me/7905341874" target='\blank'>
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>

                    <a href="https://www.instagram.com/11swayam12/?next=%2F&hl=en" target='\blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/11swayam12" target='\blank'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/swayamsinghvns" target='\blank'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>

            </div>


            {/* RIGHT IMAGE */}
            <div
                className="banner-img-part"
                style={{
                    transform: `translateX(${scrollY * 1}px)`,
                    transition: "transform 0.1s linear"
                }}
            >

                <img src={My_Img} alt="Main" />

            </div>

        </div>
    )
}

export default Banner;