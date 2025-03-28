import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Bets from "./pages/Bets";
import BetEdit from "./pages/BetEdit";
import SubmittedForm from "./pages/SubmittedForm";
import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";

import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {

  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {!hideHeader && <Header />}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/bets" element={<PrivateRoute>  <Bets /> </PrivateRoute>} />
          <Route path="/bet-edit" element={<BetEdit />} />
          <Route path="/success" element={<SubmittedForm />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
