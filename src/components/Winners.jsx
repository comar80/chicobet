import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import CenteredBlogCard3 from "examples/Cards/BlogCards/CenteredBlogCard3";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import image1 from "assets/images/numero-1.png";
import image2 from "assets/images/numero-2.png";
import image3 from "assets/images/numero-3.png";

function Winners() {
    const isMobile = useMediaQuery('(max-width:991px)');


    const premios = [
        {
            id: '1',
            titulo: "Juliana Frias Pinheiro",
            descricao: "3 Pontos",
            imagem: image1,
            alt: "Photo 1"
        },
        {
            id: '2',
            titulo: "Rodrigo Ribeiro",
            descricao: "3 Pontos",
            imagem: image2,
            alt: "Photo 2"
        },
        {
            id: '3',
            titulo: "Luiza Manzini",
            descricao: "2 Pontos",
            imagem: image3,
            alt: "Photo 3"
        },
    ];


    return (
        <>
            <MKBox component="section" pt={0} pb={0}>
                <Container>
                    {isMobile ? (
                        <MKBox sx={{ width: "100%" }}>
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
                                                width: '100%',
                                                // mt: 1,
                                                mb: 0.5,
                                            }}
                                        >
                                            <CenteredBlogCard3
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
                                    <CenteredBlogCard3
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

export default Winners;
