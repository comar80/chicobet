import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Bets() {
    const location = useLocation();

    const { peso = "", tamanho = "", data = "", sexo = "" } = location.state || {};

    const [pesoInput, setPeso] = useState(peso);
    const [tamanhoInput, setTamanho] = useState(tamanho);
    const [dataInput, setData] = useState(data);
    const [sexoInput, setSexo] = useState(sexo);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle the form submission, navigate to success page
        navigate("/success", {
            state: {
                message: "Form submitted successfully!",
                peso: pesoInput,
                tamanho: tamanhoInput,
                data: dataInput,
                sexo: sexoInput
            },
        });
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
                <button type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Bets;
