import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [logoutTimer, setLogoutTimer] = useState(null);


    useEffect(() => {
        const userData = localStorage.getItem("token");
        if (userData) {
            setUser(userData);
        }
    }, []);

    const login = (token, expirationTime = 1800000) => { // Default expiration: 1 hour
        setUser(token);
        localStorage.setItem("token", token);

        // Clear any existing timer
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }

        // Set a timer to automatically log out after the expiration time
        const timer = setTimeout(() => {
            logout();
        }, expirationTime);

        setLogoutTimer(timer);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");

        // Clear the logout timer if it exists
        if (logoutTimer) {
            clearTimeout(logoutTimer);
            setLogoutTimer(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
