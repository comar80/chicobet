import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import CenteredBlogCard2 from "examples/Cards/BlogCards/CenteredBlogCard2";


function Prizes() {

    const premios = [
        { id: '1', titulo: "Premio 1", descricao: "Descrição Premio 1", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 1" },
        { id: '2', titulo: "Premio 2", descricao: "Descrição Premio 2", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 2" },
        { id: '3', titulo: "Premio 3", descricao: "Descrição Premio 3", imagem: "https://images.pexels.com/photos/31057725/pexels-photo-31057725/free-photo-of-bebida.jpeg", alt: "Photo 3" },
    ];


    return (
        <>
            <MKBox component="section" pt={3} pb={8}>
            <Container>
                <Grid container>
                    <Grid size={{ xs:12, md:8  }} sx={{ mb: 2 }}>
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
                    <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
                        {premios.map((premio) => (
                            <Grid size={{ xs: 12, md: 3 }} sx={{ m: 1 }} >
                                <CenteredBlogCard2
                                    image={premio.imagem}
                                    title={premio.titulo}
                                    description={premio.descricao}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </MKBox>
        </>
    );
}

export default Prizes;