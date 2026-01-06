import React from 'react';
import InfosysLogo from './InfosysLogo';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-container">
          <InfosysLogo />
          <div>
            <h1 className="header-title">
              Technology Innovation Hub
            </h1>
            <div className="header-subtitle">Connected Innovation</div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-search">
          <svg className="header-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input 
            type="text" 
            placeholder="Search innovation hub..." 
            className="header-search-input"
          />
        </div>
        <div className="header-actions">
          <button className="header-action-btn" title="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge">3</span>
          </button>
          <button className="header-action-btn" title="Help">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </button>
        </div>
        <div className="header-user">
          <div className="header-avatar">JD</div>
          <div className="header-user-info">
            <div className="header-user-name">John Doe</div>
            <div className="header-user-role">Innovation Lead</div>
          </div>
        </div>
      </div>
      {/* <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{
          color: '#2c3e50',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
          fontWeight: '500'
        }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(44, 62, 80, 0.1)'}
           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          Home
        </Link>
        <Link to="/innovation" style={{
          color: '#2c3e50',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background-color 0.3s',
          fontWeight: '500'
        }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(44, 62, 80, 0.1)'}
           onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
          Innovation
        </Link>
      </nav> */}
    </header>
  );
};

export default Header;