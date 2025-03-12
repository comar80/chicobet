import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

function SubmittedForm() {
    const location = useLocation();
    const navigate = useNavigate();

    const { message, peso, tamanho, data, sexo } = location.state || {};
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleEditClick = () => {
        navigate("/bets", {
            state: { peso, tamanho, data, sexo }
        });
    };

    return (
        <main className="main-bets">
            {showMessage && message && (
                <div className="success-message">
                    {message}
                </div>
            )}
            <h2>Suas Apostas</h2>
            {peso && <p><strong>Peso:</strong> {peso} kg</p>}
            {tamanho && <p><strong>Tamanho:</strong> {tamanho} cm</p>}
            {data && <p><strong>Data:</strong> {data}</p>}
            {sexo && <p><strong>Sexo:</strong> {sexo}</p>}

            <button onClick={handleEditClick}>Edit</button>
        </main>
    );
}

export default SubmittedForm;
