import React from 'react';
import logo from './logo-color.png'; // Import the logo image

function Logo({ alt = 'Logo', width = '60px', height = 'auto', borderRadius = '0%' }) {
  return (
    <div>
      <img
        src={logo}
        alt={alt}
        style={{ width, height }}
        className="rounded-full transition-transform duration-200 ease-in-out transform hover:scale-105"
      />
    </div>
  );
}

export default Logo;
