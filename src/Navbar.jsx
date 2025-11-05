import React from "react";
import "./navbar.css";
import { useState,useEffect } from "react";
function Navbar({changetheme}) {
    return(
        <nav className="navbar">
            <button className="theme" onClick={changetheme}>Theme</button>
            <ul>
                <li>Home</li>
                <li>Summary</li>
                <li>Flashcards</li>
                <li>Quizzes</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
export default Navbar;