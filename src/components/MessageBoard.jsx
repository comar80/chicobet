import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Grid, Paper, Container } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

function MessageBoard() {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${API_URL}/messages`);
                setMessages(res.data.reverse());
            } catch (error) {
                console.error("Erro ao ler mensagens:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, [API_URL]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name.trim() && text.trim()) {
            try {
                const res = await axios.post(`${API_URL}/messages`, { name, message: text });
                setMessages([res.data, ...messages]);
                setName("");
                setText("");
            } catch (error) {
                console.error("Erro ao criar mensagem:", error);

                toast.error(error.response?.data?.message || "Erro ao criar mensagem", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    return (
        <MKBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={2}
            mx={-2}
            mt={2}
            mb={-2}
            sx={{
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
            }}
        >
            <Container>
                <Grid container>
                    <Grid size={{ xs: 12, md: 8 }} sx={{ mb: 1 }}>
                        <MKTypography variant="h3" color="white">
                            Recados
                        </MKTypography>
                        <MKTypography variant="body2" color="white" opacity={0.8}>
                            Deixe seu recado!
                        </MKTypography>
                    </Grid>
                </Grid>
            </Container>
            <Box display="flex" justifyContent="center" mb={2}>
                <MKBox component="form" role="form" onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexDirection: "column", maxWidth: 400, width: "100%" }}>
                    <MKInput label="Seu Nome" fullWidth
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        inputProps={{ style: { color: "white" } }}
                    />
                    <MKInput
                        label="Mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        multiline
                        rows={6}
                        required
                        inputProps={{ style: { color: "white" }, maxLength: 600 }}
                    />
                    <MKTypography variant="caption" color="white" sx={{ alignSelf: "flex-end" }}>
                        {text.length}/600
                    </MKTypography>
                    <MKBox mt={2} mb={1}>
                        <MKButton type="submit" variant="outlined" color="info" fullWidth disabled={loading}>
                            Enviar
                        </MKButton>
                    </MKBox>
                </MKBox>
            </Box>
            <Box
                sx={{
                    mt: 3,
                    height: 250,
                    overflowY: "auto",
                    bgcolor: "background.default",
                    borderRadius: 1,
                    boxShadow: 1,
                    p: 1,
                }}
            >
                <Grid container spacing={2}>
                    {messages.length === 0 ? (
                        <Grid size={{xs: 12}} sx={{ display: "flex", height: 220 }}>
                            <Paper
                                sx={{
                                    p: 2,
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    backgroundColor: "background.default",
                                    boxShadow: 3,
                                }}
                            >
                                <MKTypography variant="body2" color="text.secondary" align="center">
                                    Nenhum recado ainda. Seja o primeiro a deixar um recado!
                                </MKTypography>
                            </Paper>
                        </Grid>
                    ) : (
                        messages.map((msg, idx) => (
                            <Grid size={{xs: 12, sm:6}} key={msg._id || idx}>
                                <Paper sx={{
                                    p: 2,
                                    minHeight: 220,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    backgroundColor: "background.default",
                                    boxShadow: 3,
                                }}>
                                    <MKTypography variant="subtitle1" >
                                        {msg.name}
                                    </MKTypography>
                                    <MKTypography variant="body2">
                                        {msg.message}
                                    </MKTypography>
                                </Paper>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Box>
            <ToastContainer />

        </MKBox>
    );
}

export default MessageBoard;