import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

function CardAtt() {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        { id: '1', titulo: "Card 1", descricao: "Descrição do Card 1", info: "Semana 1" },
        { id: '2', titulo: "Card 2", descricao: "Descrição do Card 2", info: "Semana 2" },
        { id: '3', titulo: "Card 3", descricao: "Descrição do Card 3", info: "Semana 3" },
        { id: '4', titulo: "Card 4", descricao: "Descrição do Card 4", info: "Semana 4" },
        { id: '5', titulo: "Card 5", descricao: "Descrição do Card 5", info: "Semana 5" },
        { id: '6', titulo: "Card 6", descricao: "Descrição do Card 6", info: "Semana 6" },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(cards[index]);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="carousel-att">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Navigation]}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} className="card-att" >
                        <h3>{card.titulo}</h3>
                        <p>{card.descricao}</p>
                        <button onClick={() => handleCardClick(index)} className="card-button">{card.info}</button>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedCard && (
                <div className="modal-card">
                    <div className="modal-card-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-card-text">
                            <h2>{selectedCard.titulo}</h2>
                            <p>{selectedCard.descricao}</p>
                            <p><strong>{selectedCard.info}</strong></p>
                        </div>
                        <button className="close-modal-card" onClick={closeModal}>
                            &#10005;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default CardAtt;