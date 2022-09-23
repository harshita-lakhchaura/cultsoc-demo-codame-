import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery_Teachers from './components/Gallery_Teachers';
import Gallery_Independence from './components/Gallery_Independence';
import App from './App';

function Route_app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/gallery_teachers" element={<Gallery_Teachers />} />
        <Route path="/gallery_independence" element={<Gallery_Independence />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Route_app