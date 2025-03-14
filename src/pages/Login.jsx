import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const userData = JSON.parse(localStorage.getItem("user"));

        if (!userData || userData.email !== email || userData.password !== password) {
            alert("Email ou senha inválidos!");
            return;
        }

        alert("Login bem sucedido!");
        login(userData);
        navigate("/");
    };

    return (
        <main className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <a href="/register">Cadastre-se aqui</a>
            </form>
        </main>
    );
}

export default Login;
