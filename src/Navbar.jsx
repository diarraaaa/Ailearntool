import React from "react";
import "./navbar.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar({theme,changetheme}) {
    return(
        <nav className="navbar">
            <button className="theme-emoji" onClick={changetheme}>{ theme === "dark" ? "🌞" : "🌜"}</button>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/signup">Get Started</Link></li>
                <li> <Link to="">Try Out</Link></li>
                <li> <Link to="">About</Link></li>
                <li> <Link to="">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;