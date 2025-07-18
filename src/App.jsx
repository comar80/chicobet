import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

import Home from "./pages/Home";
import Bets from "./pages/Bets";
import BetsEnd from "./pages/BetsEnd";
import BetEdit from "./pages/BetEdit";
import SubmittedForm from "./pages/SubmittedForm";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Gifts from "./pages/Gifts";
import VerifyEmail from "./pages/VerifyEmail";
import ResendEmail from "./pages/ResendEmail";
import SendResetPasswordLink from "./pages/SendResetPasswordLink";
import PasswordReset from "./pages/PasswordReset";
import Messages from "./pages/Messages";
import Admin from "./pages/Admin";
import Ranking from "./pages/Ranking";


import PrivateRoute from "./components/PrivateRoute";

import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="bets" element={<BetsEnd />} />
          {/* <Route path="bet-edit" element={<BetEdit />} /> */}
          <Route path="success" element={<SubmittedForm />} />
          <Route path="about" element={<About />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="resend-email" element={<ResendEmail />} />
          <Route path="send-reset-password" element={<SendResetPasswordLink />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="messages" element={<Messages />} />
          <Route path="admin" element={<Admin />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
