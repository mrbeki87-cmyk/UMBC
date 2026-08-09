import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
// Removed Shield import
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    if (!email) {
      return "Please enter your email.";
    }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "Please enter your password.";
    }
    return "";
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const eError = validateEmail(email);
    const pError = validatePassword(password);
    
    setEmailError(eError);
    setPasswordError(pError);
    
    if (!eError && !pError) {
      // Demo logic: any valid email + non-empty password works
      login(email);
      navigate('/');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src="/logo-transparent.png" alt="UMBC Logo" className="logo-image" style={{ height: '120px', objectFit: 'contain' }} />
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to continue to your learning experience.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError('');
              }}
              className={emailError ? 'input-error' : ''}
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError('');
              }}
              className={passwordError ? 'input-error' : ''}
            />
            {passwordError && <span className="error-message">{passwordError}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-block login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
