import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Red from './components/red'
import Orange from './components/orange'
import Yellow from './components/yellow'
import Green from './components/green'
import Blue from './components/blue'
import Indigo from './components/indigo'
import Violet from './components/violet'
import Home from './components/home'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Navbar />
        </div>
        <div id="main-section">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/red" element={<Red />} />
            <Route path="/orange" element={<Orange />} />
            <Route path="/yellow" element={<Yellow />} />
            <Route path="/green" element={<Green />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/indigo" element={<Indigo />} />
            <Route path="/violet" element={<Violet />} />
          </Routes >
        </div>
      </div>
    </>
  )
}

export default App
