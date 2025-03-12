import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';

function Carousel() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const photos = [
        { id: '1', src: "https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg", alt: "Photo 1" },
        { id: '2', src: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg", alt: "Photo 2" },
        { id: '3', src: "https://images.pexels.com/photos/459953/pexels-photo-459953.jpeg", alt: "Photo 3" },
        { id: '4', src: "https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg", alt: "Photo 1" },
        { id: '5', src: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg", alt: "Photo 2" },
        { id: '6', src: "https://images.pexels.com/photos/459953/pexels-photo-459953.jpeg", alt: "Photo 3" },
    ];

    const handleImageClick = (index) => {
        setSelectedImage(photos[index].src);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const goToNextImage = () => {
        const nextIndex = (currentIndex + 1) % photos.length;
        setSelectedImage(photos[nextIndex].src);
        setCurrentIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setSelectedImage(photos[prevIndex].src);
        setCurrentIndex(prevIndex);
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
                modules={[Pagination, Navigation]}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide>
                        <img 
                            key={index}
                            src={photo.src} 
                            alt={photo.alt} 
                            className="carousel-image"
                            onClick={() => handleImageClick(index)} 
                            />
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-button prev" onClick={goToPreviousImage}>
                            &#10094;
                        </button>
                        <img src={selectedImage} alt="Larger view" className="modal-image" />
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

export default Carousel;