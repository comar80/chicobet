import React, { useState, useEffect } from "react";
import getDriveImages from "../services/getDriveImages";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';

function Carousel() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getDriveImages().then(data => {
            if (data) {
                setPhotos(data);
            }
        });
    }, []);

    const handleImageClick = (index) => {
        setSelectedImage(photos[index].url);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(null);
    };

    const goToNextImage = () => {
        const nextIndex = (currentIndex + 1) % photos.length;
        setSelectedImage(photos[nextIndex].url);
        setCurrentIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setSelectedImage(photos[prevIndex].url);
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="carousel">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1281: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}

                modules={[Pagination, Navigation, Autoplay]}
            >
                {photos.map((photo, index) => (
                    <SwiperSlide>
                        <img
                            key={index}
                            src={photo.url}
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