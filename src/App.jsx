import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { useState } from 'react'
import './App.css'
import { Header } from './components/common/Header';
import { Home } from "../src/pages/Home"
import { Routes, Route } from 'react-router';

function App() {


  return (
    <div className="min-vh-100" style={{ backgroun: "#000814", minHeight: "" }} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
