import React from 'react';
import './header.css'
import { GiGluttonousSmile } from "react-icons/gi";

function Header() {
  return (
    <header className="site-header">
      <div className="HeaderInnercontainer">
        <div className="logo">MangaSite</div>
        <nav className="main-nav">
          <ul>
            <li>Home</li>
            <li>Hot</li>
            <li>New</li>
            <li>Genres</li>
          </ul>
        </nav>
        <div className="search-area">
          <input type="search" placeholder="Search manga..." />
          <button type="submit">Search</button>
        </div>

        <div className="profilePicture">
          <GiGluttonousSmile/>
        </div>
      </div>
    </header>
  );
}

export default Header;