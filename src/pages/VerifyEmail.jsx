import React from "react";
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import SimpleFooter from "examples/Footers/SimpleFooter";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import bgImage from "assets/images/babybet-bg1.jpg";

function VerifyEmail() {

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/verify-email?token=${token}`);
                console.log(response.data.message);

                if (response.data.message === 'Email verified successfully') {
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 5000);
                }
            } catch (error) {
                console.log(error.response?.data?.message || 'Something went wrong');
            }
        };

        if (token) {
            verifyEmail();
        }
    }, [token]);

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
                                    variant="h2"
                                    color="light"
                                    mt={18}
                                    mb={4}
                                    sx={({ breakpoints, typography: { size } }) => ({
                                        fontSize: size["5xl"],
                                        [breakpoints.down("md")]: {
                                            fontSize: size["4xl"],
                                            mb: 4,
                                            mt: 18,
                                        },
                                        [breakpoints.down("sm")]: {
                                            fontSize: size["3xl"],
                                            mb: 4,
                                            mt: 18
                                        },
                                    })}
                                >
                                    Email verificado com sucesso!
                                </MKTypography>

                                <MKButton variant="outlined" color="light" href="/login" mt={3} mb={3}>
                                    Faça o login
                                </MKButton>
                            </Grid>
                        </Container>
                    </Grid>
                </MKBox>
            </MKBox>
            <MKBox width="100%" position="relative" zIndex={2} mt={3} mb={2}>
                <SimpleFooter light />
            </MKBox>
        </MKBox>
    );
}

export default VerifyEmail;