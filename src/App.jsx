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
import BetEdit from "./pages/BetEdit";
import SubmittedForm from "./pages/SubmittedForm";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Gifts from "./pages/Gifts";
import VerifyEmail from "./pages/VerifyEmail";
import ResendEmail from "./pages/ResendEmail";



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
          <Route path="bets" element={ <Bets /> } />
          {/* <Route path="bet-edit" element={<BetEdit />} /> */}
          <Route path="success" element={<SubmittedForm />} />
          <Route path="about" element={<About />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="resend-email" element={<ResendEmail />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
