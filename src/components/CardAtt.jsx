import React, { useState, useEffect } from "react";
import getCardsJson from "../services/getCardsJson";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function CardAtt() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCardsJson().then(data => {
            if (data) {
                setCards(data);
            }
        });
    }, []);

    const handleCardClick = (index) => {
        console.log("Card clicked:", index);
        const card = cards[index];
        setSelectedCard(card);

        if (card.images && card.images.length > 0) {
            const formattedImages = card.images.map((url) => {
                const fileIdMatch = url.match(/[-\w]{25,}/);
                return fileIdMatch ? `https://lh3.googleusercontent.com/d/${fileIdMatch[0]}=w1000` : url;
            });

            setModalImages(formattedImages);
        } else {
            setModalImages([]);
        }
    };

    const closeModal = () => {
        setSelectedCard(null);
        setModalImages([]);
    };

    return (
        <div className="carousel-att">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={card.id} className="card-att">
                        <CenteredBlogCard
                            image={card.images[0]}
                            title={card.description}
                            // description={card.description}
                            action={{
                                color: "info",
                                label: "Mais informações",
                                onClick: () => handleCardClick(index)
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedCard && (
                <div className="modal-card">
                    <div className="modal-card-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-card-text">
                            <h2>{selectedCard.title}</h2>
                            <p>{selectedCard.description}</p>
                            <p className="modal-texto">{selectedCard.text}</p>

                            {modalImages.length > 0 && (
                                <div className="modal-card-images">
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination, Navigation]}
                                    >
                                        {modalImages.map((image, idx) => (
                                            <SwiperSlide key={idx}>
                                                <img src={image} alt={`Imagem ${idx + 1}`} className="modal-card-image" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                        <button className="close-modal-card" onClick={closeModal}>
                            &#10005;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

}

export default CardAtt;