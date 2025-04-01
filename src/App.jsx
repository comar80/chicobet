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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/bets" element={<PrivateRoute>  <Bets /> </PrivateRoute>} />
          <Route path="/bet-edit" element={<BetEdit />} />
          <Route path="/success" element={<SubmittedForm />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
