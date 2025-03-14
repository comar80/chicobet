import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function SubmittedForm() {
    const location = useLocation();
    const navigate = useNavigate();

    const { message, peso, tamanho, data, sexo } = location.state || {};
    const betData = JSON.parse(localStorage.getItem("bet"));
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleEditClick = () => {
        navigate("/bets");
    };

    return (
        <main className="main-bets">
            {showMessage && message && (
                <div className="success-message">
                    {message}
                </div>
            )}
            <h2>Suas Apostas</h2>
            {betData.peso && <p><strong>Peso:</strong> {betData.peso} kg</p>}
            {betData.tamanho && <p><strong>Tamanho:</strong> {betData.tamanho} cm</p>}
            {betData.data && <p><strong>Data:</strong> {betData.data}</p>}
            {betData.sexo && <p><strong>Sexo:</strong> {betData.sexo}</p>}

            <button onClick={handleEditClick}>Edit</button>
        </main>
    );
}

export default SubmittedForm;
