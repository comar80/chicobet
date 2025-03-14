import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const userData = { name, email, password };
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Usuário registrado!");

        navigate("/login");
    };

    return (
        <main className="register-page">
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister} className="register-form">
                <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    );
}

export default Register;
