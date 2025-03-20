import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function BetEdit() {

    const navigate = useNavigate();
    const location = useLocation();

    const [pesoInput, setPeso] = useState("");
    const [tamanhoInput, setTamanho] = useState("");
    const [dataInput, setData] = useState("");
    const [sexoInput, setSexo] = useState("");
    const betId = location.state?.bet.id;
    console.log("betId:", betId);

    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.userId;

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado!");
            navigate("/login");
            return;
        }

        const fetchBetData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bets/user/${userId}`);

                if (response.data) {
                    setPeso(response.data.weight || "");
                    setTamanho(response.data.size || "");
                    setData(response.data.date || "");
                    setSexo(response.data.gender || "");
                }
            } catch (error) {
                console.error("Erro ao buscar dados da aposta:", error);
                alert("Falha ao carregar dados da aposta.");
            }
        };

        fetchBetData();
    }, [navigate, token, userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const betData = { weight: pesoInput, size: tamanhoInput, date: dataInput, gender: sexoInput, userId: userId };

        try {
            const response = await axios.put(`http://localhost:5000/api/bets/${betId}`, betData);

            console.log("Bet edited:", response.data);
            navigate("/success", { state: { message: "Aposta editada!" } });

        } catch (error) {
            console.error("Erro ao editar aposta:", error.response?.data || error.message);
            alert("Falha ao editar aposta.");
        }
    };

    return (
        <main className="main-bets">
            <h2>Edite sua Aposta</h2>
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

export default BetEdit;
