import React from "react";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Prizes from "../components/Prizes";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import SimpleFooter from "examples/Footers/SimpleFooter";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import bgImage from "assets/images/babybet-bg1.jpg";

function Home() {
    return (
        <>
            {/* <MKBox position="fixed" top="0.5rem" width="100%" zIndex={10}> */}
                <DefaultNavbar
                    brand="ChicoBet"
                />
            {/* </MKBox> */}
            <MKBox
                minHeight="70vh"
                height="450px"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        size={{ xs: 12, lg: 8 }}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
                        <MKTypography
                            variant="h1"
                            color="light"
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            Bem vindo à ChicoBet
                        </MKTypography>
                        <MKTypography variant="body1" color="light" opacity={0.8} mt={1} mb={3}>
                            Um jeito divertido de acompanhar o crescimento do Francisco com a gente! <br />
                            Para apostar e concorrer aos prêmios crie uma conta.
                        </MKTypography>
                        <MKButton variant="outlined" color="light" href="/register">
                            Criar conta
                        </MKButton>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: 2,
                    bgcolor: ({ palette }) => palette.light.main
                }}
            >
                <Carousel />
                <News />
                <Prizes />

            </Card>

            <MKBox pb={3} >
            <SimpleFooter />
            </MKBox>

        </>
    );
}

export default Home;