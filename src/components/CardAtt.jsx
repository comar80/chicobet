import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

function CardAtt() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const cards = [
        { id: '1', nome: "Card 1", info: "Semana 1" },
        { id: '2', nome: "Card 2", info: "Semana 2" },
        { id: '3', nome: "Card 3", info: "Semana 3" },
        { id: '4', nome: "Card 4", info: "Semana 4" },
        { id: '5', nome: "Card 5", info: "Semana 5" },
        { id: '6', nome: "Card 6", info: "Semana 6" },
    ];

    const handleImageClick = (index) => {
        setSelectedCard(cards[index].src);
        setCurrentIndex(index);
    };

    const goToNextImage = () => {
        const nextIndex = (currentIndex + 1) % cards.length;
        setSelectedCard(cards[nextIndex].src);
        setCurrentIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
        setSelectedCard(cards[prevIndex].src);
        setCurrentIndex(prevIndex);
    };

    const closeModal = () => {
        setSelectedCard(null);
        setCurrentIndex(null);
    };

    return (
        <div className="carousel">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}

                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index} >
                        <h3>{card.nome}</h3>
                        <button onClick={() => handleImageClick(index)} className="card-button">{card.info}</button>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedCard && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-button prev" onClick={goToPreviousImage}>
                            &#10094;
                        </button>
                        <img src={selectedCard} alt="Larger view" className="modal-image" />
                        <button className="modal-button next" onClick={goToNextImage}>
                            &#10095;
                        </button>
                        <button className="close-modal" onClick={closeModal}>
                            &#10005;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default CardAtt;