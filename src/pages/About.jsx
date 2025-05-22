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
                                            mx: 3
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                            mx: 2
                                        },
                                    })}
                                >
                                    Você está na ChicoBet, um espaço criado para celebrar e acompanhar a jornada do Chico Bruce!
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
                                            mx: 3
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: "0.9rem",
                                            mx: 2
                                        },
                                    })}
                                >
                                    Aqui você encontra fotos e atualizações semanais sobre o desenvolvimento do Francisco e, se quiser, pode escolher um presente para o bebê.
                                    Além disso, na área de apostas você pode dar seu palpite sobre as características do Chiquinho, como peso, altura e data de nascimento. Quando ele chegar, os três participantes que chegarem mais perto e somarem mais pontos ganham os prêmios.
                                    Participe dessa experiência divertida e emocionante enquanto aguardamos a chegada do pequeno!
                                </MKTypography>

                                <MKBox
                                    component="section"
                                    variant="gradient"
                                    bgColor="dark"
                                    position="relative"
                                    py={6}
                                    px={2}
                                    mx={-2}
                                    mt={3}
                                    mb={-2}
                                    borderRadius="lg"
                                >
                                    <Container>
                                        <Grid container>
                                            <Grid size={{ xs: 12, md: 8 }} sx={{ mb: 2 }}>
                                                <MKTypography variant="h5" color="white">
                                                    Regulamento das Apostas
                                                </MKTypography>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                    <MKTypography
                                        variant="body1"
                                        color="white"
                                        opacity={0.8}
                                        mx={6}
                                        sx={({ breakpoints }) => ({
                                            textAlign: "justify",
                                            fontSize: "1.1rem",
                                            [breakpoints.down("md")]: {
                                                fontSize: "1rem",
                                                mx: 3
                                            },
                                            [breakpoints.down("sm")]: {
                                                fontSize: "0.9rem",
                                                mx: 2
                                            },
                                        })}
                                    >
                                        <ul>
                                            <li>As apostas serão encerradas a caminho da maternidade </li>
                                            <li>
                                                Cada palpite será comparado com os dados reais do bebê após o nascimento. A pontuação será atribuída com base na proximidade de cada palpite, seguindo as regras abaixo:
                                                <br />
                                                <ul>
                                                    <li style={{ textAlign: "center", fontWeight: "bold", listStyle: "none" }}>
                                                        Peso (máximo de 5 pontos)
                                                    </li>
                                                    <ul style={{ textAlign: "center", listStyle: "none" }}>
                                                        <li>Diferença de até 50g: 5 pontos</li>
                                                        <li>Diferença de 51g a 100g: 4 pontos</li>
                                                        <li>Diferença de 101g a 150g: 3 pontos</li>
                                                        <li>Diferença de 151g a 200g: 2 pontos</li>
                                                        <li>Diferença de 201g a 250g: 1 ponto</li>
                                                        <li>Diferença acima de 250g: 0 pontos</li>
                                                    </ul>
                                                    <br />
                                                    <li style={{ textAlign: "center", fontWeight: "bold", listStyle: "none" }}>
                                                        Tamanho (0 a 3 pontos)
                                                    </li>
                                                    <ul style={{ textAlign: "center", listStyle: "none" }}>
                                                        <li>Diferença de até 1cm: 3 pontos</li>
                                                        <li>Diferença de até 2cm: 2 pontos</li>
                                                        <li>Diferença de até 3cm: 1 pontos</li>
                                                        <li>Acima de 3 cm: 0 pontos</li>
                                                    </ul>
                                                    <br />
                                                    <li style={{ textAlign: "center", fontWeight: "bold", listStyle: "none" }}>
                                                        Data de nascimento (0 a 2 pontos)
                                                    </li>
                                                    <ul style={{ textAlign: "center", listStyle: "none" }}>
                                                        <li>Exato: 2 pontos</li>
                                                        <li>Até 1 dia: 1 ponto</li>
                                                        <li>Acima de 1 dia: 0 pontos</li>
                                                    </ul>
                                                </ul>
                                            </li >
                                            <br />
                                            <li> Os três participantes que somarem mais pontos ganharão os prêmios de acordo com a colocação</li>
                                            <li>Se houver empate de pontos entre duas apostas a que foi feita primeiro terá prioridade</li>
                                            <br />
                                        </ul>
                                    </MKTypography>

                                </MKBox>

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