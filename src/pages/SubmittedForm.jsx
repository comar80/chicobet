import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function SubmittedForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const [betData, setBetData] = useState(null);
    const [showMessage, setShowMessage] = useState(true);

    const { message } = location.state || {};

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado!");
            navigate("/login");
            return;
        }

        const fetchBetData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bets/user`, {
                    headers: { "Authorization": `Bearer ${token}` }
                });

                setBetData(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados da aposta:", error);
                alert("Falha ao carregar dados da aposta.");
            }
        };

        fetchBetData();

        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, token]);

    const handleEditClick = () => {
        if (betData) {
            navigate("/bet-edit", { state: { bet: betData } });
        }
    };

    return (
        <main className="main-bets">
            {showMessage && message && (
                <div className="success-message">
                    {message}
                </div>
            )}
            <h2>Suas Apostas</h2>
            {betData ? (
                <>
                    {betData.weight && <p><strong>Peso:</strong> {betData.weight} kg</p>}
                    {betData.size && <p><strong>Tamanho:</strong> {betData.size} cm</p>}
                    {betData.date && <p><strong>Data:</strong> {betData.date}</p>}
                    {betData.gender && <p><strong>Sexo:</strong> {betData.gender}</p>}
                </>
            ) : (
                <p>Carregando seus dados...</p>
            )}

            <button onClick={handleEditClick}>Edit</button>
        </main>
    );
}

export default SubmittedForm;
