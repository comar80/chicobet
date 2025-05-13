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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/babybet-bg1.jpg";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

function Bets() {

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
                                        <MKBox
                                            component="form"
                                            role="form"
                                            onSubmit={handleOpenModal}
                                            p={2}
                                        >
                                            <MKBox pt={0.5} pb={3} px={3}>
                                                <Grid
                                                    display="flex"
                                                    flexDirection="column"
                                                    justifyContent="center"
                                                    alignItems="center"
                                                    width="100%"
                                                    height="100%">


                                                    <Grid size={{ xs: 6, md: 4 }} pr={1} mb={6}>

                                                        {/* <MKTypography variant="body1" color="text" mb={2}>
                                                            <strong>Peso:</strong>
                                                        </MKTypography> */}
                                                        <Tooltip title="O peso normal de um recém-nascido varia entre 3000 e 4000 gramas" placement="right">

                                                            <MKInput
                                                                variant="standard"
                                                                label="Peso (em g)"
                                                                placeholder="Ex: 3000"
                                                                InputLabelProps={{ shrink: true }}
                                                                fullWidth
                                                                type="text"
                                                                value={pesoInput}
                                                                onChange={(e) => {
                                                                    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                                                    setPeso(value);
                                                                }}
                                                                required
                                                            />
                                                        </Tooltip>
                                                    </Grid>

                                                    <Grid size={{ xs: 6, md: 4 }} pr={1} mb={6}>

                                                        {/* <MKTypography variant="body1" color="text" mb={2}>
                                                            <strong>Tamanho:</strong>
                                                        </MKTypography> */}
                                                        <Tooltip title="O tamanho normal de um recém-nascido varia entre 45 e 55 centímetros" placement="right">

                                                            <MKInput
                                                                variant="standard"
                                                                label="Tamanho (em cm)"
                                                                placeholder="Ex: 50"
                                                                InputLabelProps={{ shrink: true }}
                                                                fullWidth
                                                                type="text"
                                                                value={tamanhoInput}
                                                                onChange={(e) => {
                                                                    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                                                    setTamanho(value);
                                                                }}
                                                                required
                                                            />
                                                        </Tooltip>
                                                    </Grid>
                                                    <Grid size={{ xs: 6, md: 4 }} pr={1} mb={6}>

                                                        {/* <MKTypography variant="body1" color="text" mb={2}>
                                                            <strong>Data:</strong>
                                                        </MKTypography> */}
                                                        <Tooltip title="O Francisco completa 40 semanas no fim de Julho" placement="right">
                                                            <MKInput
                                                                variant="standard"
                                                                label="Data:"
                                                                placeholder="Data"
                                                                InputLabelProps={{ shrink: true }}
                                                                fullWidth
                                                                type="date"
                                                                value={dataInput}
                                                                onChange={(e) => setData(e.target.value)}
                                                                required
                                                            />
                                                        </Tooltip >
                                                    </Grid>

                                                    <Grid size={{ xs: 6, md: 4 }} pr={1} mb={6}>

                                                        {/* <MKTypography variant="body1" color="text" mb={2}>
                                                            <strong>Sexo:</strong>
                                                        </MKTypography> */}
                                                        <FormControl variant="standard" fullWidth>
                                                            <InputLabel id="gender">Sexo*</InputLabel>
                                                            <Select
                                                                labelId="gender"
                                                                id="gender"
                                                                value={sexoInput}
                                                                onChange={(e) => setSexo(e.target.value)}
                                                                required
                                                                label="Sexo"
                                                            >
                                                                <MenuItem value="male">
                                                                    Menino
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                                <Grid
                                                    container
                                                    size={12}
                                                    justifyContent="center"
                                                    textAlign="center"
                                                    ml="auto"
                                                >
                                                    <MKButton variant="gradient" color="secondary" type="submit">
                                                        Apostar
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

            {/* Modal de confirmação */}
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <MKTypography id="modal-title" variant="h6" component="h2" mb={1}>
                        Confirmar Aposta
                    </MKTypography>
                    <MKTypography id="modal-description" variant="body2" color="error" mb={2}>
                        <strong>A aposta é única e não pode ser alterada. Você tem certeza que deseja continuar?</strong>
                    </MKTypography>
                    <MKTypography id="modal-description" mb={2}>
                        <strong>Peso:</strong> {pesoInput} g<br />
                        <strong>Tamanho:</strong> {tamanhoInput} cm<br />
                        <strong>Data:</strong> {dataInput.split("-").reverse().join("-")}<br />
                        <strong>Sexo:</strong> {sexoInput === "male" ? "Menino" : "Menina"}
                    </MKTypography>
                    <Grid container justifyContent="space-between">
                        <MKButton variant="outlined" color="secondary" onClick={handleCloseModal}>
                            Cancelar
                        </MKButton>
                        <MKButton variant="gradient" color="secondary" onClick={handleConfirm}>
                            Confirmar
                        </MKButton>
                    </Grid>
                </Box>
            </Modal>


        </>
    );
}

export default Bets;
