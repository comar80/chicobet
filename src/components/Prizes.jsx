import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard2 from "examples/Cards/BlogCards/CenteredBlogCard2";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import image1 from "assets/images/numero-1.png";
import image2 from "assets/images/numero-2.png";
import image3 from "assets/images/numero-3.png";

function Prizes() {
    const isMobile = useMediaQuery('(max-width:991px)');


    const premios = [
        {
            id: '1',
            titulo: "Assinatura gratuita do “Chicoflix” + Bebida à sua escolha de até R$150",
            descricao: "Acesso a imagens exclusivas das melhores caretas, choros e sorrisos do bebê toda semana (até ele pedir para parar ou a gente cansar), e uma garrafa de bebida à escolha do ganhador de até R$150",
            imagem: image1,
            alt: "Photo 1"
        },
        {
            id: '2',
            titulo: "Foto autografada da primeira papinha espalhada no rosto inteiro + Bebida à sua escolha de até R$100",
            descricao: "Uma obra de arte moderna, com assinatura borrada de purezinho de cenoura, e uma garrafa de bebida à escolha do ganhador de até R$100",
            imagem: image2,
            alt: "Photo 2"
        },
        {
            id: '3',
            titulo: "Pacote de figurinhas do Chiquinho + Bebida à sua escolha de até R$50",
            descricao: "Reações exclusivas no WhatsApp para surpreender a todos com essa fofura, e uma garrafa de bebida à escolha do ganhador de até R$50",
            imagem: image3,
            alt: "Photo 3"
        },
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
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100%',
                                                // mt: 1,
                                                mb: 1,
                                            }}
                                        >
                                            <CenteredBlogCard2
                                                image={premio.imagem}
                                                title={premio.titulo}
                                                description={premio.descricao}
                                                alt={premio.alt}
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
                                        alt={premio.alt}
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
