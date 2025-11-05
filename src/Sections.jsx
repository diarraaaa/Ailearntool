import React from "react";
import "./sections.css";
import { FaYoutube, FaFileAlt, FaClipboard, FaQuestionCircle } from "react-icons/fa";

function Section1({banner}){
    return(
        <div className="section1">
            <div className="section1text"> 
                <h2>Welcome to  <b style={{fontWeight:"bolder",fontSize:"50px"}}>MyStudyBuddy</b></h2>
                <p>Our goal is to help you study more effectively.Your personal study assistant. Upload any material and watch it turn into clear summaries, flashcards, and study tools.</p>
            </div>
            <img src={`./src/assets/${banner}`} alt="Banner" className="banner" />
        </div>
    )
}
function Section2(){
    function handleclick(){
        alert("This feature is coming soon!");
    }
    return(
        <div className="section2">
            <h1>Why use <b style={{fontWeight:"bolder",fontSize:"50px"}}>MyStudyBuddy?</b></h1>
            <div className="features">
                <ul className="featurelist">
                    <li><h1><FaFileAlt /> Summarization</h1> <p>Automatically generate summaries from your notes.</p><button onClick={handleclick}>Try it out</button></li>
                    <li><h1><FaClipboard /> Flashcards</h1> <p>Create flashcards from your notes for effective memorization.</p><button onClick={handleclick}>Try it out</button></li>
                    <li><h1><FaQuestionCircle /> Quizzes</h1> <p>Test your knowledge with quizzes based on your study material.</p><button onClick={handleclick}>Try it out</button></li>
                    <li><h1><FaYoutube /> Videos and articles </h1> <p>Personalized recommendations for videos and articles.</p><button onClick={handleclick}>Try it out</button></li>
                </ul>
            </div>
        </div>
    )
}
        
export {Section1,Section2};
