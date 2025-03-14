import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleBetsClick = () => {
        const betData = localStorage.getItem("bet");

        if (betData) {
            navigate("/success");
        } else {
            navigate("/bets");
        }
    };

    const handleLogout = () => {
        navigate("/");
        setTimeout(() => {
            logout();
        }, 10);
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a onClick={handleBetsClick}>Apostas</a></li>
                    {user ? (
                        <li><a onClick={handleLogout}>Logout</a></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;