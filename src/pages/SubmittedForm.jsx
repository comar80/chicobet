import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/babybet-bg1.jpg";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";


function SubmittedForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const [betData, setBetData] = useState(null);
    const [showMessage, setShowMessage] = useState(true);

    const { message } = location.state || {};

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado!");
            navigate("/login");
            return;
        }

        const fetchBetData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/bets/user`, {
                    headers: { "Authorization": `Bearer ${token}` }
                });

                let data = response.data; // Store response data

                data = {
                    ...data,
                    date: data.date ? data.date.split("-").reverse().join("-") : data.date,
                    gender: data.gender === "male" ? "Menino" : data.gender === "female" ? "Menina" : data.gender
                };

                setBetData(data);
            } catch (error) {
                console.error("Erro ao buscar dados da aposta:", error);
                alert("Falha ao carregar dados da aposta.");
            }
        };

        fetchBetData();

        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, token]);

    const handleEditClick = () => {
        if (betData) {
            navigate("/bet-edit", { state: { bet: betData } });
        }
    };

    return (
        <>
            <DefaultNavbar
                brand="BabyBet"

            />
            <MKBox bgColor="white" minHeight="100vh" display="flex" flexDirection="column">
                {/* {showMessage && message && (
                    <div className="success-message">
                        {message}
                    </div>
                )} */}
                <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // minHeight="100vh"
                    mt={{ xs: "96px", md: "96px" }}
                    flexGrow={1}
                    py={{ xs: 0, lg: 6 }}>
                    <Container>
                        <Grid container>
                            <MKBox
                                width="100%"
                                bgColor="white"
                                borderRadius="xl"
                                shadow="xl"
                                mb={6}
                                sx={{ overflow: "hidden" }}
                            >
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, lg: 5 }}
                                        position="relative"
                                        px={0}
                                        sx={{
                                            backgroundImage: ({
                                                palette: { gradients },
                                                functions: { rgba, linearGradient },
                                            }) =>
                                                `${linearGradient(
                                                    rgba(gradients.dark.main, 0.8),
                                                    rgba(gradients.dark.state, 0.8)
                                                )}, url(${bgImage})`,
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <MKBox
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            width="100%"
                                            height="100%"
                                        >
                                            <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                                                <MKTypography variant="h3" color="white" mb={1}>
                                                    Suas Apostas
                                                </MKTypography>
                                                <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                                                    Veja e edite as suas apostas
                                                </MKTypography>
                                            </MKBox>
                                        </MKBox>
                                    </Grid>
                                    <Grid size={{ xs: 12, lg: 7 }}>
                                        <MKBox p={2} >
                                            <MKBox pt={0.5} pb={3} px={3}>
                                                <Grid
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    width="100%"
                                                    height="100%">
                                                    {betData ? (
                                                        <>
                                                            <Grid xs={12} pr={1} mb={6}>
                                                                {betData.weight &&
                                                                    <MKTypography variant="body1" color="text" mb={2}>
                                                                        <strong>Peso:</strong> {betData.weight} g
                                                                    </MKTypography>}
                                                            </Grid>
                                                            <Grid xs={12} pr={1} mb={6}>
                                                                {betData.size &&
                                                                    <MKTypography variant="body1" color="text" mb={2}>
                                                                        <strong>Tamanho:</strong> {betData.size} cm
                                                                    </MKTypography>}
                                                            </Grid>
                                                            <Grid xs={12} pr={1} mb={6}>
                                                                {betData.date &&
                                                                    <MKTypography variant="body1" color="text" mb={2}>
                                                                        <strong>Data:</strong> {betData.date}
                                                                    </MKTypography>}
                                                            </Grid>
                                                            <Grid xs={12} pr={1} mb={6}>
                                                                {betData.gender &&
                                                                    <MKTypography variant="body1" color="text" mb={2}>
                                                                        <strong>Sexo:</strong> {betData.gender}
                                                                    </MKTypography>}
                                                            </Grid>
                                                        </>
                                                    ) : (
                                                        <Grid xs={12} pr={1} mb={6}>
                                                            <MKTypography variant="body1" color="text" mb={2}>
                                                                Carregando seus dados...
                                                            </MKTypography>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                                <Grid
                                                    container
                                                    size={12}
                                                    justifyContent="center"
                                                    textAlign="center"
                                                    ml="auto"
                                                >
                                                    <MKButton variant="gradient" color="secondary" onClick={handleEditClick}>
                                                        Editar
                                                    </MKButton>
                                                </Grid>
                                            </MKBox>
                                        </MKBox>
                                    </Grid>
                                </Grid>
                            </MKBox>
                        </Grid>
                    </Container >
                </MKBox >
                <MKBox pb={3} >
                    <SimpleFooter />
                </MKBox>
            </MKBox >
        </>
    );
}

export default SubmittedForm;
