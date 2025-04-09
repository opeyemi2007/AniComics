import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">MangaSite</div>
        <nav className="main-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" className="active">Hot</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Genres</a></li>
          </ul>
        </nav>
        <div className="search-area">
          <input type="search" placeholder="Search manga..." />
          <button type="submit">Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;