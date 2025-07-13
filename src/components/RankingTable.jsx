import React, { useState, useEffect } from "react";
import { Box, Grid, Paper, Container, Card } from "@mui/material";
import rankingData from "../assets/ranking.json";
import Winners from "../components/Winners";


import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function formatDateDMY(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function RankingTable() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        setRanking(rankingData);
    }, []);

    return (
        <MKBox
            maxWidth="100%"
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={2}
            sx={({ breakpoints }) => ({
                p: 2,
                mx: { xs: 4, md: 12, lg: 24 },
                mt: 2,
                [breakpoints.down("md")]: {
                    mt: 6,
                },
                [breakpoints.down("sm")]: {
                    mt: 3,
                },
                boxShadow: 2,
                borderRadius: 2,
            })}
        >
            <Container>
                <Grid container>
                    <MKTypography
                        variant="body1"
                        color="white"
                        opacity={0.8}
                        mt={2}
                        mx={6}
                        mb={0}
                        sx={({ breakpoints }) => ({
                            textAlign: "justify",
                            fontSize: "1.1rem",
                            [breakpoints.down("md")]: {
                                fontSize: "1rem",
                                mx: 3
                            },
                            [breakpoints.down("sm")]: {
                                fontSize: "0.9rem",
                                mx: 2
                            },
                        })}
                    >
                        O Francisco chegou de surpresa, derrubando todo mundo no ranking e quase acabando com a brincadeira! <br />
                        Ele nasceu de 37 semanas, às 20:41 do dia 06/07, com 2.780g e 46cm.
                    </MKTypography>
                    <Grid size={{ xs: 12, md: 8 }} sx={{ mt: 2 }}>
                        <MKTypography
                            variant="h3"
                            color="white"
                            opacity={0.8}
                            sx={{
                                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                            }}
                        >
                            Ganhadores
                        </MKTypography>
                    </Grid>
                </Grid>
            </Container>
            <Box
                sx={{
                    mt: 2,
                }}
            >
                <Winners />
            </Box>
            <Container>
                <Grid container>
                    <Grid size={{ xs: 12, md: 8 }} sx={{ mb: 2, mt: 2 }}>
                        <MKTypography
                            variant="h3"
                            color="white"
                            opacity={0.8}
                            sx={{
                                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                            }}
                        >
                            Ranking
                        </MKTypography>
                    </Grid>
                </Grid>
            </Container>
            <Box
            >
                <TableContainer
                    component={Paper}
                    sx={{
                        overflowX: "auto",
                        overflowY: "auto",
                        maxWidth: { xs: "100vw", md: "100%" },
                        width: "100%",
                        maxHeight: "500px",
                    }}
                >
                    <Table sx={{ minWidth: 650, mt: 1, ml: 1, mr: 1 }} aria-label="simple table">
                        <TableHead
                            sx={{
                                display: "table-header-group !important"
                            }}>
                            <TableRow sx={{
                                whiteSpace: "nowrap",
                                position: "sticky",
                                top: 0,
                                background: "#fff",
                                zIndex: 2,
                            }}>
                                <TableCell>Posição</TableCell>
                                <TableCell align="center">Nome</TableCell>
                                <TableCell align="center">Peso (g)</TableCell>
                                <TableCell align="center">Tamanho (cm)</TableCell>
                                <TableCell align="center" >Data de Nascimento</TableCell>
                                <TableCell align="center">Pontuação</TableCell>
                                <TableCell align="center">Data da Aposta</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ranking.map((aposta, idx) => (
                                <TableRow
                                    key={aposta.Nome + idx}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{aposta.Ranking}º</TableCell>
                                    <TableCell align="center">{aposta.Nome}</TableCell>
                                    <TableCell align="center">{aposta.Peso}</TableCell>
                                    <TableCell align="center">{aposta.Tamanho}</TableCell>
                                    <TableCell align="center">{aposta.DataNascimento.split("-").reverse().join("-")}</TableCell>
                                    <TableCell align="center">{aposta.Pontos}</TableCell>
                                    <TableCell align="center">{formatDateDMY(aposta.Criado)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </MKBox>
    );
}

export default RankingTable;