import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {

  const iconStyle = {
    fontSize: '40px',
    color: 'white',
    transition: 'color 0.5s ease',
    margin: '0 70px', // Margin on each side
    cursor: 'pointer', // Show cursor pointer on hover
    float: 'right',
    backgroundColor:'rgb(50,50,50',
    padding: '10px',
    borderRadius: '10px',
    zIndex: '9'
  };

  const iconHoverStyle = {
    color: 'rgb(200,100,100)', // Color on hover
  };

  const footerStyles = {
    bottom: '0',
    position: 'fixed',
    alignItems: 'center', // Center icons vertically
    padding: '40px',
    width: '100%',
    zIndex: '-1'
  };
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div style={footerStyles}>
        <a href="https://www.instagram.com/jtgreyes/">
            <FaInstagram
                style={hoveredIcon === 'Instagram' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('Instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>

        <a href="https://www.linkedin.com/in/jt-reyes/">
            <FaLinkedinIn
                style={hoveredIcon === 'LinkedIn' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('LinkedIn')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>
        <a href="https://github.com/jesustgr">
            <FaGithub
                style={hoveredIcon === 'Github' ? { ...iconStyle, ...iconHoverStyle } : iconStyle}
                onMouseEnter={() => setHoveredIcon('Github')}
                onMouseLeave={() => setHoveredIcon(null)}
            />
        </a>
    </div>
  );
}