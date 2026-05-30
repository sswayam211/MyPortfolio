import React, { useState, useEffect } from 'react';
import ResumePdf from '../Resume/Swayam_Singh_Resume.pdf';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const handelResize = () => {
            setIsMobile(window.innerWidth <= 600);
        }

        window.addEventListener('resize', handelResize);
        handelResize();

        return () => window.removeEventListener('resize', handelResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Scroll to the top of the page whenever the route changes
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(!isMenuOpen);
    }, [location.pathname]);


    return (
        <>
            <nav className='sticky-top'>
                <div className="nav-bar">
                    <div className={`nav-toggler ${isMenuOpen ? 'close' : 'open'}`} onClick={toggleMenu}>
                        <div className="nav-menu-btn">
                            <div className="lines"></div>
                            <div className="lines"></div>
                            <div className="lines"></div>
                        </div>
                    </div>
                    <div className="nav-links">
                        <ul className={`nav-menu ${isMenuOpen ? 'close' : 'open'}`}>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link-a active' : 'nav-link-a'} to="/" end><li className='nav-link'>Home</li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link-a active' : 'nav-link-a'} to="/about"><li className='nav-link'>About</li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link-a active' : 'nav-link-a'} to="/project"><li className='nav-link'>Projects</li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav-link-a active' : 'nav-link-a'} to="/contact"><li className='nav-link'>Contact</li></NavLink>
                            <a className='nav-link-a' href={ResumePdf} target="_blank" rel="noopener noreferrer"><li className='nav-link'>Resume</li></a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
