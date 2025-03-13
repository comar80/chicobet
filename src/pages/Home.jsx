import React from "react";
import Carousel from "../components/Carousel";
import CardAtt from "../components/CardAtt";
import Prizes from "../components/Prizes";


function Home() {
    
    return (
        <main>
            <h2>
                Nome
            </h2>
            <p>
                Descrição/Mensagem de boas-vindas
            </p>
            <Carousel />
            <h2>Atualizações</h2>
            <CardAtt />
            <h2>Prêmios</h2>
            <Prizes />
        </main>
    );
}

export default Home;