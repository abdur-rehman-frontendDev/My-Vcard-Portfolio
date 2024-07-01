import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink
                        to="/My-Portfolio/about"
                        className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                    >
                        About
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/My-Portfolio/resume"
                        className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                    >
                        Resume
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/My-Portfolio/portfolio"
                        className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/My-Portfolio/blog"
                        className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                    >
                        Blog
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        to="/My-Portfolio/contact"
                        className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
