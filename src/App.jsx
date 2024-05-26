import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponent/Navbar.js";
import HomePage from "./pages/HomePage.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Hero from "./components/Hero.js";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Routes>
           <Route path="/" element={<HomePage />} /> 
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
