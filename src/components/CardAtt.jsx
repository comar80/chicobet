import React, { useState, useEffect } from "react";
import getCardsJson from "../services/getCardsJson";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80vw",
    height: "95vh",
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    overflowX: 'hidden',
};

function CardAtt() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [modalImages, setModalImages] = useState([]);
    const [cards, setCards] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BasicModal = () => (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Container>
                        <Grid
                            size={12}
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <MKTypography
                                variant="h2"
                                color="dark.gradient"
                                sx={({ breakpoints }) => ({
                                    fontSize: "2rem",
                                    [breakpoints.down("md")]: {
                                        fontSize: "1.8rem",
                                    },
                                    [breakpoints.down("sm")]: {
                                        fontSize: "1.5rem",
                                    },
                                    textAlign: "center"
                                })}
                            >
                                {selectedCard.title}
                            </MKTypography>
                            <MKTypography
                                variant="h4"
                                color="dark.gradient"
                                opacity={0.8}
                                mt={1}
                                mb={3}
                                sx={({ breakpoints }) => ({
                                    fontSize: "1.8rem",
                                    [breakpoints.down("md")]: {
                                        fontSize: "1.5rem",
                                    },
                                    [breakpoints.down("sm")]: {
                                        fontSize: "1.1rem",
                                    },
                                    textAlign: "center"
                                })}
                            >
                                {selectedCard.description}
                            </MKTypography>
                            <MKTypography 
                            variant="body1" 
                            color="dark.gradient" 
                            opacity={0.8} 
                            mt={1} 
                            mb={1}
                            sx={({ breakpoints }) => ({
                                textAlign: "justify",
                                fontSize: "1.1rem",
                                [breakpoints.down("md")]: {
                                    fontSize: "1rem",
                                },
                                [breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",                                },
                            })}
                            >
                                {selectedCard.text}
                            </MKTypography>
                            {/* <MKTypography variant="body2" color="dark.gradient" opacity={0.8} mb={2}>
                                * Informações do App Gravidez+
                            </MKTypography> */}

                            {modalImages.length > 1 && (
                                <MKBox sx={{
                                    width: "100%",
                                    margin: "0 auto"
                                }}>
                                    <Swiper
                                        slidesPerView="auto"
                                        spaceBetween={10}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination, Navigation]}

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
                                    >
                                        {modalImages.map((image, idx) => (
                                            <SwiperSlide key={idx} className="modal-card-slide">
                                                <div className="image-container">
                                                    <img src={image} alt={`Imagem ${idx + 1}`} />
                                                </div>
                                            </SwiperSlide>

                                        ))}
                                    </Swiper>
                                </MKBox>
                            )}

                            {selectedCard.video.length > 0 && (
                                <MKBox
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        paddingTop: "56.25%", /* 16:9 Aspect Ratio */
                                        marginTop: 3
                                    }}
                                >
                                    <iframe
                                        src={selectedCard.video[0]}
                                        title="YouTube Video"
                                        allowFullScreen
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            border: "none",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </MKBox>
                            )}

                            <button className="close-modal-card" onClick={closeModal}>
                                &#10005;
                            </button>
                        </Grid>
                    </Container>
                </Box>
            </Modal>
        </div>
    );

    useEffect(() => {
        getCardsJson().then(data => {
            if (data) {
                setCards(data);
            }
        });
    }, []);

    const handleCardClick = (index) => {

        const card = cards[index];
        setSelectedCard(card);
        handleOpen();

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
        <>
            <MKBox className="carousel-att">
                <Swiper
                    slidesPerView={1}
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
                    <BasicModal />
                )}
            </MKBox>
        </>
    );

}

export default CardAtt;