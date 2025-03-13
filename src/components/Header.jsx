import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Header() {

    const { user, logout } = useAuth();

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bets">Apostas</Link></li>
                    {user ? (
                        <li><Link onClick={logout}>Logout</Link></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;