import React from 'react'
import './Header.css'

export default function Header({ title, handleNav }) {
  return (
    <header>
      <div className="logo">
        <img src="https://thumbs.gfycat.com/GrimPlushAnkole-max-1mb.gif" alt="globe.gif" width="100" />
        <h1><a href="#">{title}</a></h1>
      </div>
      <nav>
        <ul>
          <li><a onClick={() => handleNav(0)}>❏ Start</a></li>
          <li><a onClick={() => handleNav(1)}>? ...</a></li>
        </ul>
      </nav>
    </header>
  );
}