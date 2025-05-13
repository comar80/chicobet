import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Card, Grid, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

import SimpleFooter from "examples/Footers/SimpleFooter";

import bgImage from "assets/images/babybet-bg1.jpg";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {

        if (location.state?.showToast) {
            toast.error("Você precisa estar logado para apostar!");
        }
    }, [location.state]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            });

            const { token, isVerified } = response.data;

            if (!isVerified) {
                toast.error("Email não verificado. Por favor, acesse o link enviado para seu email. Cheque sua caixa de entrada ou spam.");
                return;
            }

            localStorage.setItem("token", token);
            login(token);
            navigate("/");

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            toast.error("Email ou senha inválidos!");
        }
    };

    return (
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
                    // minHeight="100%"
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
                                            Login
                                        </MKTypography>
                                    </MKBox>
                                </MKBox>

                                <MKBox pt={3} pb={3} px={12}>
                                    <MKBox component="form" role="form" onSubmit={handleLogin}>
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
                                        <MKBox mb={2}>
                                            <MKInput
                                                variant="standard"
                                                label="Senha"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                fullWidth
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                edge="end"
                                                                sx={{ fontSize: "20px" }}
                                                            >
                                                                {showPassword ? <VisibilityOff sx={{ fontSize: "20px" }} /> : <Visibility sx={{ fontSize: "20px" }} />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </MKBox>
                                        <MKBox mt={4} mb={1}>
                                            <MKButton variant="gradient" color="secondary" fullWidth type="submit">
                                                Entrar
                                            </MKButton>
                                        </MKBox>
                                        <MKBox mt={3} textAlign="center">
                                            <MKTypography variant="button" color="text">
                                                Não tem uma conta?{" "}
                                                <MKTypography
                                                    component={Link}
                                                    to="/register"
                                                    variant="button"
                                                    color="info"
                                                    fontWeight="medium"
                                                    textGradient
                                                >
                                                    Cadastre-se
                                                </MKTypography>
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox textAlign="center">
                                            <MKTypography
                                                component={Link}
                                                to="/send-reset-password"
                                                variant="button"
                                                color="info"
                                                fontWeight="medium"
                                                textGradient
                                                sx={{ fontSize: "0.8rem" }}
                                            >
                                                Esqueceu a senha?
                                            </MKTypography>
                                        </MKBox>
                                        <MKBox textAlign="center">
                                            <MKTypography
                                                component={Link}
                                                to="/resend-email"
                                                variant="button"
                                                color="info"
                                                fontWeight="medium"
                                                textGradient
                                                sx={{ fontSize: "0.8rem" }}
                                            >
                                                Reenviar email de verificação
                                            </MKTypography>
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
            <ToastContainer />
        </MKBox>
    );
}

export default Login;
