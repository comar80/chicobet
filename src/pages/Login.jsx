import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import SimpleFooter from "examples/Footers/SimpleFooter";

import bgImage from "assets/images/babybet-bg1.jpg";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password
            });

            const { token } = response.data;

            localStorage.setItem("token", token);

            alert("Login bem sucedido!");
            login(token);
            navigate("/");

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Email ou senha inválidos!");
        }
    };

    return (
        <>
            <MKBox
                position="absolute"
                top={0}
                left={0}
                zIndex={1}
                width="100%"
                minHeight="100vh"
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
            <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
                <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
                    <Grid size={{ xs: 11, sm: 9, md: 5, lg: 4, xl: 3 }} >
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
                                        <MKInput variant="standard" label="Email" type="email" placeholder="email@dominio.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </MKBox>
                                    <MKBox mb={2}>
                                        <MKInput variant="standard" label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </MKBox>
                                    <MKBox mt={4} mb={1}>
                                        <MKButton variant="gradient" color="secondary" fullWidth type="submit">
                                            Entrar
                                        </MKButton>
                                    </MKBox>
                                    <MKBox mt={3} mb={1} textAlign="center">
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
                                </MKBox>
                            </MKBox>
                        </Card>
                    </Grid>
                </Grid>
            </MKBox>
            <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
                <SimpleFooter light />
            </MKBox>
        </>
    );
}

export default Login;
