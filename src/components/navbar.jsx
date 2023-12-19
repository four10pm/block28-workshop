import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
          <Link to="/" className="home nav"> Home </Link> 
          <Link to="/red" className="red nav" > Red </Link>
          <Link to="/orange" className="orange nav"> Orange </Link>
          <Link to="/yellow" className="yellow nav"> Yellow </Link>
          <Link to="/green" className="green nav"> Green </Link>
          <Link to="/blue" className="blue nav"> Blue </Link>
          <Link to="/indigo" className="indigo nav"> Indigo </Link>
          <Link to="/violet" className="violet nav"> Violet </Link>
        </div>
    )

}