import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Bets from "./components/Bets";
import SubmittedForm from "./components/SubmittedForm";
import "./App.css";

import {register} from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/success" element={<SubmittedForm />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
