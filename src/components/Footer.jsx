import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MangaSite Clone. This is for educational purposes only.</p>
        <p><a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Terms of Service</a></p>
      </div>
    </footer>
  );
}

export default Footer;