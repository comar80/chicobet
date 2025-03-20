import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = { name, email, password };
        try {
            const response = await axios.post("http://localhost:5000/api/users", userData, {
                headers: { "Content-Type": "application/json" },
            });
    
            console.log("Usuário cadastrado:", response.data);
            navigate("/login");
    
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error.response?.data || error.message);
            alert("Falha ao salvar usuário.");
        }
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
