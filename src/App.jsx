import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

import {register} from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
