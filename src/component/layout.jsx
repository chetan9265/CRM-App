// components/Layout.jsx - Pure CSS Media Queries (No isMobile, No Title)
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const handleMenuItemClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout-container">
      <div 
        className={`sidebar ${
          isSidebarOpen 
            ? 'mobile-open'
            : 'mobile-closed desktop-closed'  
        }`}
      >
        <button 
          className="sidebar-close-btn"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close menu"
        >
          <i className="bi bi-x-lg"></i>
        </button>
        
        <div className="sidebar-header">
          <i className="bi bi-grid-3x3-gap-fill"></i>
          <span>LeadCRM</span>
        </div>
        
        <div className="sidebar-menu">
          <Link 
            to="/dashboard" 
            className="menu-item"
            onClick={handleMenuItemClick}
          >
            <i className="bi bi-speedometer2"></i>
            <span>Dashboard</span>
          </Link>

          <Link 
            to="/leads" 
            className="menu-item"
            onClick={handleMenuItemClick}
          >
            <i className="bi bi-person-lines-fill"></i>
            <span>Leads</span>
          </Link>
        </div>

        <div className="sidebar-footer">
          <button className="menu-item logout-btn" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div className="main-content">
        <div className="navbar-container">
          <button 
            className="navbar-toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className={`bi bi-${isSidebarOpen ? 'x-lg' : 'list'}`}></i>
          </button>

          <nav className="top-navbar">
            <div className="nav-right">
              <div className="notification-icon">
                <i className="bi bi-bell"></i>
                <span className="notification-badge">3</span>
              </div>
              <div className="user-dropdown">
                <img 
                  src={`https://ui-avatars.com/api/?name=Admin+User&background=667eea&color=fff&size=32`} 
                  alt="User"
                  className="user-avatar"
                />
                <span className="user-name">Admin</span>
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
          </nav>
        </div>
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;