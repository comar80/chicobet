import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

function Admin() {
    const [bets, setBets] = useState([]);
    const [users, setUsers] = useState({});
    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch bets and users in parallel
                const [betsRes, usersRes] = await Promise.all([
                    axios.get(`${API_URL}/bets`, {
                        headers: { Authorization: `Bearer ${token}` },
                    }),
                    axios.get(`${API_URL}/users`, {
                        headers: { Authorization: `Bearer ${token}` },
                    }),
                ]);

                setBets(betsRes.data);

                // Map userId to name for quick lookup
                const userMap = {};
                usersRes.data.forEach(user => {
                    userMap[user.id] = user.name;
                });
                setUsers(userMap);
            } catch (error) {
                console.error("Erro ao buscar dados:", error.response?.data || error.message);
            }
        };
        fetchData();
    }, [API_URL, token]);

    return (
        <>
            <DefaultNavbar brand="ChicoBet" />
            <div style={{ paddingTop: 80, minHeight: "80vh" }}>
                <div style={{ maxWidth: 900, margin: "32px auto 16px auto" }}>
                    <h2 style={{ marginBottom: 24 }}>Lista de Apostas</h2>
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th style={{ maxWidth: 120, textAlign: "left", padding: 8, borderBottom: "1px solid #ccc" }}>Usuário</th>
                                    <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ccc" }}>Bet ID</th>
                                    <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ccc" }}>Peso (g)</th>
                                    <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ccc" }}>Tamanho (cm)</th>
                                    <th style={{ textAlign: "left", padding: 8, borderBottom: "1px solid #ccc" }}>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bets.map((bet) => (
                                    <tr key={bet.id}>
                                        <td style={{
                                            maxWidth: 350,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            padding: 8,
                                            borderBottom: "1px solid #eee"
                                        }}>
                                            {users[bet.userId] || "N/A"}
                                        </td>
                                        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{bet.id}</td>
                                        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{bet.weight}</td>
                                        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>{bet.size}</td>
                                        <td style={{ padding: 8, borderBottom: "1px solid #eee" }}>
                                            {bet.date ? bet.date.split("T")[0].split("-").reverse().join("-") : ""}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div style={{ paddingBottom: 24 }}>
                <SimpleFooter />
            </div>
        </>

    );
}

export default Admin;