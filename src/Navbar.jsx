import React from "react";
import "./navbar.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";
function Navbar({theme,changetheme}) {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
        };
        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return(
        <nav className="navbar">
            <button className="theme-emoji" onClick={changetheme}> { theme === "dark" ? "🌞" : "🌜"}</button>
            <ul>
                <li> <Link to="/">Home</Link></li>
                {session ? (
                    <>
                        <li> <Link to="/profile">Profile</Link></li>
                        <button className="logout-button" onClick={async() =>{
                            await supabase.auth.signOut();
                            setSession(null);
                            navigate('/');
                        }}>Logout</button>
                    </>
                ) : (
                    <>
                        <li> <Link to="/signup">Get Started</Link></li>
                        <li> <Link to="/try">Try Out</Link></li>
                        <li> <Link to="">About</Link></li>
                        <li> <Link to="">Contact</Link></li>
                    </>)}
            </ul>
        </nav>
    )
} 
export default Navbar;