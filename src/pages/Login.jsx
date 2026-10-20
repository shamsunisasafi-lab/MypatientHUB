import React, { useState } from 'react';
import './Login.css';
import { Stethoscope, User, Mail, Lock, Phone, ArrowRight } from 'lucide-react';

const Login = ({ onLoginSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) onLoginSuccess();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert('Password and Confirm Password do not match!');
      return;
    }
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="login-landing-bg">
      {/* حباب‌های رنگی در پس‌زمینه */}
      <div className="bg-bubble bubble-1"></div>
      <div className="bg-bubble bubble-2"></div>
      <div className="bg-bubble bubble-3"></div>

      {!isOpen ? (
        <div className="welcome-card">
          <div className="welcome-icon-glow">
            <Stethoscope size={36} color="#ffffff" />
          </div>
          <h2>Your Health, Our Priority</h2>
          <p>We provide smart healthcare services in your hands. Click below to access your medical hub.</p>
          <button className="btn-open-form" onClick={() => setIsOpen(true)}>
            Open Login Form <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}>
          
          {/* فرم ورود (Sign In) */}
          <div className="flip-card-face flip-card-front">
            <div className="card-top-icon">
              <Stethoscope size={26} color="#ffffff" />
            </div>
            <h3>Sign In</h3>
            <p className="card-subtext">Access your MyPatientHUB account</p>

            <form onSubmit={handleLoginSubmit} className="glass-form">
              <div className="input-field-group">
                <Mail size={16} className="field-icon" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required 
                />
              </div>

              <div className="input-field-group">
                <Lock size={16} className="field-icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required 
                />
              </div>

              <button type="submit" className="btn-glass-submit">
                Login
              </button>
            </form>

            <div className="card-flip-footer">
              <span>Don't have an account?</span>
              <button type="button" className="btn-switch-flip" onClick={() => setIsFlipped(true)}>
                Sign Up
              </button>
            </div>
          </div>

          {/* فرم ثبت‌نام (Create Account) */}
          <div className="flip-card-face flip-card-back">
            <div className="card-top-icon small-icon">
              <Stethoscope size={22} color="#ffffff" />
            </div>
            <h3>Create Account</h3>
            <p className="card-subtext">Join MyPatientHUB today</p>

            <form onSubmit={handleSignUpSubmit} className="glass-form">
              <div className="input-field-group">
                <User size={15} className="field-icon" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={signUpData.fullName}
                  onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                  required 
                />
              </div>

              <div className="input-field-group">
                <Mail size={15} className="field-icon" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={signUpData.email}
                  onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                  required 
                />
              </div>

              <div className="input-field-group">
                <Phone size={15} className="field-icon" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={signUpData.phone}
                  onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                  required 
                />
              </div>

              <div className="input-field-group">
                <Lock size={15} className="field-icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={signUpData.password}
                  onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                  required 
                />
              </div>

              <div className="input-field-group">
                <Lock size={15} className="field-icon" />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  value={signUpData.confirmPassword}
                  onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                  required 
                />
              </div>

              <button type="submit" className="btn-glass-submit">
                Sign Up
              </button>
            </form>

            <div className="card-flip-footer">
              <span>Already have an account?</span>
              <button type="button" className="btn-switch-flip" onClick={() => setIsFlipped(false)}>
                Sign In
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Login;