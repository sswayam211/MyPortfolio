import React, { useState,useRef,useEffect } from 'react';
import { NavLink,useLocation } from 'react-router-dom';

const Header = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navRef = useRef(null); // Reference for the navbar
    const toggleButtonRef = useRef(null); // Reference for the toggle button
    const location = useLocation(); // Detect route changes

    // Function to toggle navbar visibility
    const toggleNavBar = () => {
        setNavVisible((prevState) => !prevState);
    };

    const handleClickOutside = (event) => {
        if (
            navRef.current && 
            !navRef.current.contains(event.target) &&
            toggleButtonRef.current &&
            !toggleButtonRef.current.contains(event.target)
        ) {
            setNavVisible(false);
        }
    };

    // Handle clicking outside of the navbar
    useEffect(() => {
        if (isNavVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup on unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavVisible]); // Re-run effect when `isNavVisible` changes

    // Automatically close navbar on route change
    useEffect(() => {
        setNavVisible(false);
    }, [location]); // Run effect on location change

    // returning back to top of the screen whenever page changes 
    const { pathname } = useLocation(); // Get the current route pathname

    useEffect(() => {
        // Scroll to the top of the page when the pathname changes
        window.scrollTo(0, 0);
    }, [pathname]); // Re-run the effect when the pathname changes

    return (
        <>
            <header>
                <div className="navbar">
                    {/* <div className="logo">SƧ</div> */}
                    <div ref={toggleButtonRef} className="shownavbar" onClick={toggleNavBar}>
                        {isNavVisible ? (<p style={{fontSize: '30px', fontWeight: 'bold', position: 'absolute', top: '-15px', right: '3px',color:"rgba(255, 255, 255, 0.553)"}}>X</p>) : (
                            <>
                                <p className="lines"></p>
                                <p className="lines"></p>
                                <p className="lines"></p>
                            </>
                        )}
                    </div>
                    <div ref={navRef} className={`nav ${isNavVisible ? 'visible' : 'hidden'}`}>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Me</NavLink></li>
                            <li><NavLink to="/project">Projects</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {/* <li><NavLink to="download/swayam resume.pdf">Resume</NavLink></li> */}
                        </ul>
                    </div>
                </div>
            </header>
            <br /><br /><br /><br />
        </>
    )
}

export default Header
