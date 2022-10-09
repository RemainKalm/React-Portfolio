import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";

function Navigation() {
    return (
        <div>
            <Navbar classname="nav-link" to="/">
                <div class="text-light">
                    <h4 class="nav-title-font">Ryan Mangerino</h4>
                </div>
            <ul className="navbar-nav m1-auto navitem-indent">
                <li class="nav-item">
                    <NavLink to="/about">
                        <div class="nav-font text-light">About Me</div>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to="/resume">
                        <div class="nav-font text-light">Resume</div>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink>
                        <div class="nav-font text-light">Portfolio</div>
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink>
                        <div class="nav-font text-light">Contact</div>
                    </NavLink>
                </li>
            </ul>
            </Navbar>
        </div>
    )
}

export default Navigation;