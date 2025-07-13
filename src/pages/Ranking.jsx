import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import RankingTable from "../components/RankingTable";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import SimpleFooter from "examples/Footers/SimpleFooter";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import bgImage from "assets/images/babybet-bg1.jpg";

function Ranking() {
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
                                    mt={14}
                                    mb={2}
                                    sx={({ breakpoints, typography: { size } }) => ({
                                        fontSize: size["5xl"],
                                        [breakpoints.down("md")]: {
                                            fontSize: size["4xl"],
                                            mb: 0,
                                            mt: 14,
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: size["3xl"],
                                            mb: 0,
                                            mt: 14
                                        },
                                    })}
                                >
                                    Resultado
                                </MKTypography>
                            </Grid>
                        </Container>
                        <RankingTable />
                    </Grid>
                </MKBox>
            </MKBox>
            <MKBox width="100%" position="relative" zIndex={2} mt={3} mb={2}>
                <SimpleFooter light />
            </MKBox>
        </MKBox>
    );
}

export default Ranking;