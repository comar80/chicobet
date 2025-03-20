import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password
            });

            const { token } = response.data;

            localStorage.setItem("token", token);

            alert("Login bem sucedido!");
            login(token);
            navigate("/");

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Email ou senha inválidos!");
        }
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
