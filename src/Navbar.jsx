import React from "react";
import "./navbar.css";
function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;