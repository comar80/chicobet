import React from "react";
import Carousel from "./Carousel";
import CardAtt from "./CardAtt";


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
        </main>
    );
}

export default Home;