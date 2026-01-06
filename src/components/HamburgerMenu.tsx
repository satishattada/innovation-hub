import React from 'react';
import './HamburgerMenu.css';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className="hamburger-menu" aria-label="Toggle menu">
      <svg className={`hamburger-svg ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line 
          className={`hamburger-line top ${isOpen ? 'open' : ''}`}
          x1="3" 
          y1="6" 
          x2="21" 
          y2="6"
        />
        <line 
          className={`hamburger-line middle ${isOpen ? 'open' : ''}`}
          x1="3" 
          y1="12" 
          x2="21" 
          y2="12"
        />
        <line 
          className={`hamburger-line bottom ${isOpen ? 'open' : ''}`}
          x1="3" 
          y1="18" 
          x2="21" 
          y2="18"
        />
      </svg>
    </button>
  );
};

export default HamburgerMenu;
