import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function Bets() {

    const navigate = useNavigate();

    const [pesoInput, setPeso] = useState("");
    const [tamanhoInput, setTamanho] = useState("");
    const [dataInput, setData] = useState("");
    const [sexoInput, setSexo] = useState("");

    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.userId;

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado para apostar!");
            navigate("/login");
            return;
        }

        const fetchBet = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bets/user`, {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                
                if (response.data) {
                    navigate("/success", { state: { bet: response.data } });
                }
            } catch (error) {
                console.error("Nenhuma aposta encontrada", error.response?.data || error.message);
            }
        };

        fetchBet();
    }, [navigate, token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const betData = { weight: pesoInput, size: tamanhoInput, date: dataInput, gender: sexoInput, userId: userId };

        try {
            const response = await axios.post("http://localhost:5000/api/bets", betData, {
                headers: { 
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });

            console.log("Bet saved:", response.data);
            navigate("/success", { state: { message: "Aposta concluída!" } });

        } catch (error) {
            console.error("Erro ao enviar aposta:", error.response?.data || error.message);
            alert("Falha ao salvar aposta.");
        }
    };

    return (
        <main className="main-bets">
            <h2>Apostas</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Peso (kg):</label>
                    <input
                        type="number"
                        value={pesoInput}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tamanho (cm):</label>
                    <input
                        type="number"
                        value={tamanhoInput}
                        onChange={(e) => setTamanho(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Data:</label>
                    <input
                        type="date"
                        value={dataInput}
                        onChange={(e) => setData(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Sexo:</label>
                    <select value={sexoInput} onChange={(e) => setSexo(e.target.value)} required>
                        <option value="">Selecione</option>
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                    </select>
                </div>
                <button type="submit">Apostar</button>
            </form>
        </main>
    );
}

export default Bets;
