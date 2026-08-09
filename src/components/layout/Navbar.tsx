import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';
import logoImg from '../../assets/logo.jpg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, userEmail, logout } = useAuth();
  const isLoginPage = location.pathname === '/login';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => { setIsOpen(false); setIsProfileOpen(false); };
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logoImg} alt="UMBC Logo" className="logo-image" style={{ height: '80px', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#courses" className="nav-link">Courses</a>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Auth Buttons Desktop */}
        {!isLoginPage && (
          <div className="navbar-actions desktop-only">
            {isAuthenticated ? (
              <div className="profile-menu-container">
                <button className="profile-btn" onClick={toggleProfile} aria-label="Profile">
                  <User size={20} />
                </button>
                {isProfileOpen && (
                  <div className="profile-dropdown">
                    <div className="profile-dropdown-header">
                      <span className="profile-email">{userEmail}</span>
                    </div>
                    <Link to="/student/courses" className="profile-dropdown-item" onClick={closeMenu}>
                      My Courses
                    </Link>
                    <button className="profile-dropdown-item logout-btn" onClick={() => {
                      logout();
                      closeMenu();
                    }}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline nav-btn">Login</Link>
                <Link to="/signup" className="btn btn-primary nav-btn">Sign Up</Link>
              </>
            )}
          </div>
        )}

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <div className="container">
            <Link to="/" className="nav-link mobile-link" onClick={closeMenu}>Home</Link>
            <a href="#courses" className="nav-link mobile-link" onClick={closeMenu}>Courses</a>
            <Link to="/about" className="nav-link mobile-link" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="nav-link mobile-link" onClick={closeMenu}>Contact</Link>
            {!isLoginPage && (
              <div className="mobile-actions">
                {isAuthenticated ? (
                  <>
                    <div className="mobile-profile-info">
                      <span className="mobile-profile-email">{userEmail}</span>
                    </div>
                    <Link to="/student/courses" className="btn btn-outline nav-btn full-width" onClick={closeMenu}>My Courses</Link>
                    <button className="btn btn-primary nav-btn full-width" onClick={() => {
                      logout();
                      closeMenu();
                    }}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-outline nav-btn full-width" onClick={closeMenu}>Login</Link>
                    <Link to="/signup" className="btn btn-primary nav-btn full-width" onClick={closeMenu}>Sign Up</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
