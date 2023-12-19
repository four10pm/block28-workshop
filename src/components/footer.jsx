import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footerbar">
          <Link to="/" className="home footer"> Home </Link> 
          <Link to="/red" className="red footer" > Red </Link>
          <Link to="/orange" className="orange footer"> Orange </Link>
          <Link to="/yellow" className="yellow footer"> Yellow </Link>
          <Link to="/green" className="green footer"> Green </Link>
          <Link to="/blue" className="blue footer"> Blue </Link>
          <Link to="/indigo" className="indigo footer"> Indigo </Link>
          <Link to="/violet" className="violet footer"> Violet </Link>
        </div>
    )

}