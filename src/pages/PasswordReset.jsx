import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import { Card, Grid, InputAdornment, IconButton, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import bgImage from "assets/images/babybet-bg1.jpg";
import SimpleFooter from "examples/Footers/SimpleFooter";


function PasswordReset() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

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

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/reset-password`, { newPassword: password, token });
            console.log("Senha redefinida", response.data);
            console.log("token", token);

            toast.success("Senha redefinida com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setTimeout(() => {
                navigate("/login");
            }, 5000);
        } catch (error) {
            console.error("Erro ao redefinir senha", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Erro ao redefinir senha", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate("/login");
            }, 5000);
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
                                <Card
                                    sx={{
                                        maxWidth: "500px",
                                        width: "100%",
                                        margin: "0 auto",
                                    }}
                                >
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
                                                Redefinir Senha
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
                                        Entre com a sua nova senha
                                    </MKTypography>
                                    <MKBox pt={3} pb={3} px={12}>
                                        <MKBox component="form" role="form" onSubmit={handleResetPassword}>
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

export default PasswordReset;
