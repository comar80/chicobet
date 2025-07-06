import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ClickAwayListener from "@mui/material/ClickAwayListener";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/babybet-bg1.jpg";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

function BetsEnd() {

    const navigate = useNavigate();

    const [pesoInput, setPeso] = useState("");
    const [tamanhoInput, setTamanho] = useState("");
    const [dataInput, setData] = useState("");
    const [sexoInput, setSexo] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);


    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.userId;

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!token) {
            navigate("/login", { state: { showToast: true } });
            return;
        }

        const fetchBet = async () => {
            try {
                const response = await axios.get(`${API_URL}/bets/user`, {
                    headers: { "Authorization": `Bearer ${token}` }
                });

                if (response.data) {
                    navigate("/success", { state: { bet: response.data } });
                }
            } catch (error) {
                console.error("Nenhuma aposta encontrada", error.response?.data || error.message);
            }
        };

        fetchBet();
    }, [navigate, token, API_URL]);

    const handleSubmit = async () => {
        const betData = { weight: pesoInput, size: tamanhoInput, date: dataInput, gender: sexoInput, userId: userId };

        try {
            const response = await axios.post(`${API_URL}/bets`, betData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            });

            console.log("Bet saved:", response.data);
            navigate("/success", { state: { message: "Aposta concluída!" } });

        } catch (error) {
            console.error("Erro ao enviar aposta:", error.response?.data || error.message);
            alert("Falha ao salvar aposta.");
        }
    };

    const handleConfirm = () => {
        setModalOpen(false);
        handleSubmit();
    };

    const handleOpenModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <DefaultNavbar
                brand="ChicoBet"
            />
            <MKBox bgColor="light" variant="gradient" minHeight="100vh" display="flex" flexDirection="column">
                <MKBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
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
                                                    Faça sua Aposta
                                                </MKTypography>
                                            </MKBox>
                                        </MKBox>
                                    </Grid>
                                    <Grid size={{ xs: 12, lg: 7 }}>
                                        <MKTypography variant="h3" color="black" m={1}>
                                            Apostas encerradas
                                        </MKTypography>
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

export default BetsEnd;
