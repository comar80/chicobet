import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import SimpleFooter from "examples/Footers/SimpleFooter";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import bgImage from "assets/images/babybet-bg1.jpg";

function Gifts() {
    return (
        <MKBox
            display="flex"
            flexDirection="column"
            minHeight="100vh" // Ensure the container takes at least the full viewport height
        >
            <MKBox flex="1"> {/* This ensures the content takes up available space */}
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
                                    Presentes
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
                                    variant="h1"
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
                                    Em construção
                                </MKTypography>
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

export default Gifts;