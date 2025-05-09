import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Card, Grid } from "@mui/material";

import bgImage from "assets/images/babybet-bg1.jpg";
import SimpleFooter from "examples/Footers/SimpleFooter";


function ResendEmail() {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

    const handleResendEmail = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/resend-verification-email`, { email });
            console.log("Email de verificação reenviado:", response.data);

            toast.success("Email enviado! Acesse seu email para confirmá-lo. Cheque o Spam caso não encontre na caixa de entrada", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                navigate("/login");
            }, 10000);
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Erro ao cadastrar usuário", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <ToastContainer />

            <MKBox
                display="flex"
                flexDirection="column"
                minHeight="100vh"
            >
                <MKBox flex="1">
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
                    <MKBox px={1}
                        width="100%"
                        mx="auto"
                        position="relative"
                        zIndex={2}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="92vh"
                    >
                        <Grid
                            container
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={11} sm={9} md={5} lg={4} xl={3} >
                                <Card>
                                    <MKBox
                                        variant="gradient"
                                        bgColor="secondary"
                                        borderRadius="lg"
                                        coloredShadow="info"
                                        mx={2}
                                        mt={-3}
                                        p={2}
                                        mb={1}
                                        textAlign="center"
                                    >
                                        <MKBox>
                                            <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                                                Reenviar Confirmação
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                    <MKTypography
                                        variant="body1"
                                        color="dark" 
                                        mt={1} 
                                        mx={3}
                                        sx={() => ({
                                            textAlign: "center",
                                            fontSize: "1rem",
                                        })}
                                        >
                                        Cheque a caixa de spam caso não encontre na caixa de entrada
                                    </MKTypography>
                                    <MKBox pt={3} pb={3} px={12}>
                                        <MKBox component="form" role="form" onSubmit={handleResendEmail}>
                                            <MKBox mb={2}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Email"
                                                    type="email"
                                                    placeholder="email@dominio.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    fullWidth
                                                    inputProps={{
                                                        pattern: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
                                                        title: "Ex: email@dominio.com",
                                                    }}
                                                />
                                            </MKBox>
                                            <MKBox mt={4} mb={1}>
                                                <MKButton variant="gradient" color="secondary" fullWidth type="submit">
                                                    Enviar
                                                </MKButton>
                                            </MKBox>
                                        </MKBox>
                                    </MKBox>
                                </Card>
                            </Grid>
                        </Grid>
                    </MKBox>
                </MKBox>
                <MKBox width="100%" position="relative" zIndex={2} mt={3} mb={2}>
                    <SimpleFooter light />
                </MKBox>
            </MKBox>
        </>
    );
}

export default ResendEmail;
