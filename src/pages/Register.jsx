import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Card, Container, Grid, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import bgImage from "assets/images/babybet-bg1.jpg";
import SimpleFooter from "examples/Footers/SimpleFooter";


function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (confirmPassword && newPassword !== confirmPassword) {
            setErrorMessage("As senhas não coincidem");
        } else {
            setErrorMessage("");
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        if (password && newConfirmPassword !== password) {
            setErrorMessage("As senhas não coincidem");
        } else {
            setErrorMessage("");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem");
            return;
        }

        setErrorMessage("");

        const userData = { name, email, password };
        try {
            const response = await axios.post("http://localhost:5000/api/users", userData, {
                headers: { "Content-Type": "application/json" },
            });

            console.log("Usuário cadastrado:", response.data);

            // Show success toast
            toast.success("Cadastro realizado! Acesse seu email para confirmá-lo. Cheque o Spam caso não encontre na caixa de entrada", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Redirect after a short delay
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
                                                Cadastre-se
                                            </MKTypography>
                                        </MKBox>
                                    </MKBox>
                                    <MKBox pt={3} pb={3} px={12}>
                                        <MKBox component="form" role="form" onSubmit={handleRegister}>
                                            <MKBox mb={2}>
                                                <MKInput variant="standard" label="Nome Completo" type="text" placeholder="Frank Vincent Zappa" value={name} onChange={(e) => setName(e.target.value)} required fullWidth/>
                                            </MKBox>
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
                                                    onChange={handlePasswordChange}
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
                                            <MKBox mb={2}>
                                                <MKInput
                                                    variant="standard"
                                                    label="Confirmar Senha"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    value={confirmPassword}
                                                    onChange={handleConfirmPasswordChange}
                                                    required
                                                    fullWidth
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                                    edge="end"
                                                                    sx={{ fontSize: "20px" }}
                                                                >
                                                                    {showConfirmPassword ? <VisibilityOff sx={{ fontSize: "20px" }} /> : <Visibility sx={{ fontSize: "20px" }} />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                />
                                                {errorMessage && (
                                                    <Typography
                                                        variant="caption"
                                                        color="error"
                                                        sx={{ display: "block", mt: 1 }}
                                                    >
                                                        {errorMessage}
                                                    </Typography>
                                                )}
                                            </MKBox>
                                            <MKBox mt={4} mb={1}>
                                                <MKButton variant="gradient" color="secondary" fullWidth type="submit">
                                                    Cadastrar
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

export default Register;
