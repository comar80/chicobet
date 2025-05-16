import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard2 from "examples/Cards/BlogCards/CenteredBlogCard2";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Prizes() {
    const isMobile = useMediaQuery('(max-width:768px)');


    const premios = [
        { id: '1', titulo: "Premio 1", descricao: "Em breve", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 1" },
        { id: '2', titulo: "Premio 2", descricao: "Em breve", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 2" },
        { id: '3', titulo: "Premio 3", descricao: "Em breve", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 3" },
    ];


    return (
        <>
            <MKBox component="section" pt={2} pb={0}>
                <Container>
                    <Grid container>
                        <Grid size={{ xs: 12, md: 8 }} sx={{ mb: 2 }}>
                            <MKTypography variant="h3" color="dark.gradient">
                                Prêmios
                            </MKTypography>
                            {/* <MKTypography variant="body2" color="white" opacity={0.8}>
                            Novidades da semana
                        </MKTypography> */}
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    {isMobile ? (
                        <MKBox>
                            <Swiper
                                modules={[Pagination, Navigation]}
                                pagination={{ clickable: true }}
                                spaceBetween={16}
                                slidesPerView={1}
                                loop={true}
                            >
                                {premios.map((premio) => (
                                    <SwiperSlide key={premio.id}
                                    >
                                        <MKBox
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                minHeight: '500px'
                                            }}
                                        >
                                            <CenteredBlogCard2
                                                image={premio.imagem}
                                                title={premio.titulo}
                                                description={premio.descricao}
                                            />
                                        </MKBox>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </MKBox>
                    ) : (
                        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                            {premios.map((premio) => (
                                <Grid size={{ xs: 12, md: 3 }} sx={{ m: 1 }} key={premio.id}>
                                    <CenteredBlogCard2
                                        image={premio.imagem}
                                        title={premio.titulo}
                                        description={premio.descricao}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Container>
            </MKBox>
        </>
    );
}

export default Prizes;