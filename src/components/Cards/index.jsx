import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import './Cards.css';

const containerStyle = {
  objectFit: 'contain',
  background: 'none',
  border: 'none',
  position: 'relative',
};

const imageStyle = {
  height: '100%',
  width: '100%',
};

const Cards = ({ alt, src, href, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? '#007bff' : 'inherit',
    textDecoration: isHovered ? 'underline' : 'none',
  };

  return (
    <div className="box d-flex flex-column">
      <div style={containerStyle} className="transparent-card">
        <Image style={imageStyle} alt={alt} src={src} />
      </div>
      <a
        href={href}
        style={linkStyle}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {title}
      </a>
    </div>
  );
}

export default Cards;