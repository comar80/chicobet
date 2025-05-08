import React, { useState, useEffect, useRef } from "react";
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
    const [verificationMessage, setVerificationMessage] = useState("");
    const [showRetryButton, setShowRetryButton] = useState(false);
    const hasRun = useRef(false);

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const verifyEmail = async () => {
            try {
                const response = await axios.get(`${API_URL}verify-email?token=${token}`);
                setVerificationMessage("Email verificado com sucesso!");
                console.log(response.data.message);

                if (response.data.message === 'Email verified successfully') {
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 5000);
                }
            } catch (error) {
                console.log(error.response?.data?.message || 'Something went wrong');
                setVerificationMessage("Email já verificado ou token inválido");
                // setTimeout(() => {
                //     window.location.href = '/login';
                // }, 10000);

                setShowRetryButton(true);
            }
        };

        if (token) {
            verifyEmail();
        }
    }, [token, API_URL]);

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
                                    {verificationMessage}
                                </MKTypography>

                                <MKButton variant="outlined" color="light" href="/login" sx={{ mb: 3 }} >
                                    Faça o login
                                </MKButton>

                                {showRetryButton && ( // Conditionally render the retry button
                                    <MKButton variant="outlined" color="light" href="/resend-email" sx={{ mb: 3 }} >
                                        Reenviar verificação
                                    </MKButton>
                                )}
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