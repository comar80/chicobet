import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import SimpleFooter from "examples/Footers/SimpleFooter";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import bgImage from "assets/images/babybet-bg1.jpg";

function About() {
    return (
        <MKBox
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <MKBox flex="1">
                <DefaultNavbar brand="ChicoBet" />
                <MKBox
                    position="fixed"
                    top={0}
                    left={0}
                    zIndex={-1}
                    width="100%"
                    height="100%"
                    sx={{
                        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.6),
                                rgba(gradients.dark.state, 0.6)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <MKBox px={1} width="100%" mx="auto" position="relative" zIndex={2}>
                    <Grid container spacing={1} justifyContent="center" alignItems="center" minHeight="100%">
                        <Container>
                            <Grid
                                container
                                size={{ xs: 12, lg: 8 }}
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                sx={{
                                    mx: "auto",
                                    textAlign: "center"
                                }}
                            >
                                <MKTypography
                                    variant="h1"
                                    color="light"
                                    mt={18}
                                    mb={2}
                                    sx={({ breakpoints, typography: { size } }) => ({
                                        fontSize: size["5xl"],
                                        [breakpoints.down("md")]: {
                                            fontSize: size["4xl"],
                                            mb: 0,
                                            mt: 18,
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: size["3xl"],
                                            mb: 0,
                                            mt: 18
                                        },
                                    })}
                                >
                                    Sobre
                                </MKTypography>
                            </Grid>
                        </Container>

                        <Card
                            sx={({ breakpoints }) => ({
                                p: 2,
                                mx: { xs: 4, md: 12, lg: 24 },
                                mt: 2,
                                [breakpoints.down("md")]: {
                                    mt: 6,
                                },
                                [breakpoints.down("sm")]: {
                                    mt: 3,
                                },
                                boxShadow: 2,
                                bgcolor: ({ palette }) => palette.light.main
                            })}
                        >
                            <MKBox
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <MKTypography
                                    variant="h4"
                                    color="dark"
                                    mt={1}
                                    mx={6}
                                    sx={({ breakpoints }) => ({
                                        textAlign: "center",
                                        fontSize: "1.1rem",
                                        [breakpoints.down("md")]: {
                                            fontSize: "1rem",
                                            mx:3
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                            mx:2
                                        },
                                    })}
                                >
                                    Bem-vindo à ChicoBet, um espaço criado para celebrar e acompanhar a jornada do nosso bebê!
                                </MKTypography>
                                <MKTypography
                                    variant="body1"
                                    color="dark"
                                    mt={2}
                                    mx={6}
                                    sx={({ breakpoints }) => ({
                                        textAlign: "justify",
                                        fontSize: "1.1rem",
                                        [breakpoints.down("md")]: {
                                            fontSize: "1rem",
                                            mx:3
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                            mx:2
                                        },
                                    })}
                                >
                                    Aqui você pode explorar fotos e atualizações semanais sobre o desenvolvimento do Francisco e escolher um presente antecipado para o chá de bebê.
                                    Além disso, na área de apostas você pode dar seu palpite sobre as características do bebê, como peso, altura e data de nascimento.
                                    Após o nascimento, os três participantes que somarem mais pontos ganham os prêmios.
                                    Participe dessa experiência divertida e emocionante enquanto aguardamos a chegada do pequeno!
                                </MKTypography>
                                {/* <MKTypography
                                    variant="body1"
                                    color="dark"
                                    mt={1}
                                    mb={2}
                                    mx={6}
                                    sx={({ breakpoints }) => ({
                                        textAlign: "center",
                                        fontSize: "1.1rem",
                                        [breakpoints.down("md")]: {
                                            fontSize: "1rem",
                                            mx:3
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                            mx:2
                                        },
                                    })}
                                >
                                    Para apostar crie seu cadastro.
                                </MKTypography>
                                <MKButton variant="outlined" color="dark" href="/babybet/register" mt={3} mb={3}>
                                    Criar conta
                                </MKButton> */}
                            </MKBox>
                        </Card>
                    </Grid>
                </MKBox>
            </MKBox>
            <MKBox width="100%" position="relative" zIndex={2} mt={3} mb={2}>
                <SimpleFooter light />
            </MKBox>
        </MKBox>
    );
}

export default About;