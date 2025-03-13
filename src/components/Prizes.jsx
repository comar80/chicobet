import React from "react";


function Prizes() {

    const premios = [
        { id: '1', titulo: "Premio 1", descricao: "Descrição Premio 1", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 1" },
        { id: '2', titulo: "Premio 2", descricao: "Descrição Premio 2", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 2" },
        { id: '3', titulo: "Premio 3", descricao: "Descrição Premio 3", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 3" },
    ];


    return (
        <div className="prizes">
            {premios.map((premio) => (
                    <div key={premio.id} className="card-prize" >
                        <h3>{premio.titulo}</h3>
                        <img 
                            src={premio.imagem} 
                            alt={premio.alt} 
                            className="prize-image"
                            />
                        <p>{premio.descricao}</p>
                    </div>
                ))}
        </div>
    );
}

export default Prizes;