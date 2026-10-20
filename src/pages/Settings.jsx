import React, { useState, useEffect } from 'react';
import './Settings.css';
import { 
  User, Stethoscope, Menu, LogOut, Search, X, Calendar, Building,
  MessageSquare, ShoppingBag, HeartPulse, Users, UserCheck, Settings as SettingsIcon,
  Bell, Shield, Key, Smartphone, Trash2, Edit, Plus, Monitor
} from 'lucide-react';

const Settings = ({ onNavigate, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isInvisible, setIsInvisible] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [activeTab, setActiveTab] = useState('basic-info');

  const [formData, setFormData] = useState({
    firstName: 'Alec',
    lastName: 'Thompson',
    gender: 'Male',
    birthMonth: 'February',
    birthDay: '1',
    birthYear: '2021',
    email: 'example@email.com',
    bloodGroup: 'A+',
    location: 'Sydney, AU',
    phone: '+40 735 631 620',
    height: '178 cm',
    weight: '72 kg',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="dashboard-container">
      {isSidebarOpen && window.innerWidth < 768 && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-top">
          <div className="logo-container">
            <span className="logo-icon">M</span>
            <span className="logo-text">MyPatientHUB</span>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="nav-menu">
          <button className="nav-item" onClick={() => onNavigate && onNavigate('Dashboard')}>
            <User size={18} /> <span>Dashboard</span>
          </button>
          
          <button className="nav-item" onClick={() => onNavigate && onNavigate('FindDoctor')}>
            <Stethoscope size={18} /> <span>FindDoctor</span>
          </button>
          <button className="nav-item" onClick={() => onNavigate && onNavigate('FindClinic')}>
            <Building size={18} /> <span>Find Clinic</span>
          </button>
         
          <button className="nav-item" onClick={() => onNavigate && onNavigate('Marketplace')}>
            <ShoppingBag size={18} /> <span>Find MarketPlace</span>
          </button>
          <button className="nav-item" onClick={() => onNavigate && onNavigate('FindPharmacy')}>
            <HeartPulse size={18} /> <span>Find Pharmacy</span>
          </button>
          <button className="nav-item" onClick={() => onNavigate && onNavigate('MyDependents')}>
            <Users size={18} /> <span>My Dependents</span>
          </button>
        
          <button className="nav-item active" onClick={() => onNavigate && onNavigate('Settings')}>
            <SettingsIcon size={18} /> <span>Settings</span>
          </button>
        </nav>

       
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu size={22} />
            </button>
            <div className="breadcrumb">
              <span>🏠 / Accountsetting</span>
              <h3>Accountsetting</h3>
            </div>
          </div>

          <div className="header-actions">
            <div className="top-search-bar">
              <Search size={16} color="#94a3b8" />
              <input type="text" placeholder="Type here..." />
            </div>
            <button className="logout-btn" onClick={onLogout}>
              <LogOut size={16} /> Log out
            </button>
            <button className="header-icon-btn"><SettingsIcon size={18} /></button>
            <button className="header-icon-btn"><Bell size={18} /></button>
          </div>
        </header>

        <div className="settings-body-layout">
          <div className="settings-side-nav">
            <button 
              className={`set-nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => scrollToSection('profile')}
            >
              <User size={16} /> Profile
            </button>
            <button 
              className={`set-nav-btn ${activeTab === 'basic-info' ? 'active' : ''}`}
              onClick={() => scrollToSection('basic-info')}
            >
              <UserCheck size={16} /> Basic Info
            </button>
            <button 
              className={`set-nav-btn ${activeTab === 'change-password' ? 'active' : ''}`}
              onClick={() => scrollToSection('change-password')}
            >
              <Key size={16} /> Change Password
            </button>
            <button 
              className={`set-nav-btn ${activeTab === '2fa' ? 'active' : ''}`}
              onClick={() => scrollToSection('2fa')}
            >
              <Shield size={16} /> 2FA
            </button>
            <button 
              className={`set-nav-btn ${activeTab === 'sessions' ? 'active' : ''}`}
              onClick={() => scrollToSection('sessions')}
            >
              <Monitor size={16} /> Sessions
            </button>
            <button 
              className={`set-nav-btn ${activeTab === 'delete-account' ? 'active' : ''}`}
              onClick={() => scrollToSection('delete-account')}
            >
              <Trash2 size={16} /> Delete Account
            </button>
          </div>

          <div className="settings-content-column">
            <div id="profile" className="settings-card profile-header-card">
              <div className="profile-user-info">
                <img 
                  src="https://th.bing.com/th/id/OIP.eaFggNiO_36rxR2ztOq-OwHaEJ?w=263&h=150&c=6&r=0&o=7&dpr=2&pid=1.7&rm=3" 
                  alt="Azam Shah" 
                  className="profile-avatar" 
                />
                <div>
                  <h2>Azam Shah</h2>
                  <span className="user-role-badge">Patient</span>
                </div>
              </div>

              <div className="invisible-toggle-row">
                <span>Switch to invisible</span>
                <label className="switch-toggle">
                  <input 
                    type="checkbox" 
                    checked={isInvisible} 
                    onChange={(e) => setIsInvisible(e.target.checked)} 
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            <div id="basic-info" className="settings-card">
              <h3 className="section-title">Basic Info</h3>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>I'm</label>
                  <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Birth Date</label>
                  <div className="date-select-group">
                    <select name="birthMonth" value={formData.birthMonth} onChange={handleChange}>
                      <option value="February">February</option>
                      <option value="January">January</option>
                      <option value="March">March</option>
                    </select>
                    <select name="birthDay" value={formData.birthDay} onChange={handleChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
                      <option value="2021">2021</option>
                      <option value="2000">2000</option>
                      <option value="1995">1995</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Blood Group</label>
                  <input 
                    type="text" 
                    name="bloodGroup" 
                    value={formData.bloodGroup} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Your Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Height</label>
                  <input 
                    type="text" 
                    name="height" 
                    placeholder="Height"
                    value={formData.height} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Weight</label>
                  <input 
                    type="text" 
                    name="weight" 
                    placeholder="Weight"
                    value={formData.weight} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
            </div>

            <div id="change-password" className="settings-card">
              <h3 className="section-title">Change Password</h3>

              <div className="form-group margin-bottom-16">
                <label>Current Password</label>
                <input 
                  type="password" 
                  name="currentPassword"
                  placeholder="Current Password" 
                  value={formData.currentPassword} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group margin-bottom-16">
                <label>New Password</label>
                <input 
                  type="password" 
                  name="newPassword"
                  placeholder="New Password" 
                  value={formData.newPassword} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group margin-bottom-24">
                <label>Confirm New Password</label>
                <input 
                  type="password" 
                  name="confirmPassword"
                  placeholder="Confirm Password" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                />
              </div>

              <div className="password-rules-row">
                <div className="rules-text">
                  <h4>Password requirements</h4>
                  <p>Please follow this guide for a strong password</p>
                  <ul>
                    <li>• One special characters</li>
                    <li>• Min 6 characters</li>
                    <li>• One number (2 are recommended)</li>
                    <li>• Change it often</li>
                  </ul>
                </div>
                <button className="btn-update-pass">UPDATE PASSWORD</button>
              </div>
            </div>

            <div id="2fa" className="settings-card">
              <div className="card-header-flex">
                <h3 className="section-title">Two-factor authentication</h3>
                <span className="badge-enabled">ENABLED</span>
              </div>

              <div className="two-fa-row">
                <div className="two-fa-info">
                  <h4>Security keys</h4>
                  <p>No Security keys</p>
                </div>
                <button className="btn-outline-small"><Plus size={14} /> ADD</button>
              </div>

              <div className="two-fa-row">
                <div className="two-fa-info">
                  <h4>SMS number</h4>
                  <p>+3012374423</p>
                </div>
                <button className="btn-outline-small"><Edit size={14} /> EDIT</button>
              </div>

              <div className="two-fa-row">
                <div className="two-fa-info">
                  <h4>Authenticator app</h4>
                  <p>Not Configured</p>
                </div>
                <button className="btn-outline-small">SET UP</button>
              </div>
            </div>

            <div id="sessions" className="settings-card">
              <h3 className="section-title">Sessions</h3>
              <p className="section-subtitle">
                This is a list of devices that have logged into your account. Remove those that you do not recognize.
              </p>

              <div className="session-item">
                <div className="session-device-info">
                  <Monitor size={22} color="#0284c7" />
                  <div>
                    <h4>Bucharest 68.133.163.201</h4>
                    <p>Your current session</p>
                  </div>
                </div>
                <div className="session-actions">
                  <span className="badge-active">ACTIVE</span>
                  <span className="country-code">EU</span>
                  <button className="link-see-more">See more →</button>
                </div>
              </div>

              <div className="session-item">
                <div className="session-device-info">
                  <Monitor size={22} color="#64748b" />
                  <div>
                    <h4>Chrome on macOS</h4>
                  </div>
                </div>
                <div className="session-actions">
                  <span className="country-code">US</span>
                  <button className="link-see-more">See more →</button>
                </div>
              </div>

              <div className="session-item">
                <div className="session-device-info">
                  <Smartphone size={22} color="#64748b" />
                  <div>
                    <h4>Safari on iPhone</h4>
                  </div>
                </div>
                <div className="session-actions">
                  <span className="country-code">US</span>
                  <button className="link-see-more">See more →</button>
                </div>
              </div>
            </div>

            <div id="delete-account" className="settings-card">
              <h3 className="section-title">Delete Account</h3>
              <p className="section-subtitle">
                Once you delete your account, there is no going back. Please be certain.
              </p>

              <div className="delete-account-controls">
                <div className="confirm-toggle-row">
                  <label className="switch-toggle">
                    <input 
                      type="checkbox" 
                      checked={confirmDelete} 
                      onChange={(e) => setConfirmDelete(e.target.checked)} 
                    />
                    <span className="slider round"></span>
                  </label>
                  <div>
                    <h4>Confirm</h4>
                    <p>I want to delete my account.</p>
                  </div>
                </div>

                <div className="delete-buttons-group">
                  <button className="btn-deactivate">DEACTIVATE</button>
                  <button 
                    className={`btn-delete-acc ${!confirmDelete ? 'disabled' : ''}`}
                    disabled={!confirmDelete}
                  >
                    DELETE ACCOUNT
                  </button>
                </div>
              </div>
            </div>

            <footer className="settings-footer">
              <p>© 2026, made with ❤️ by <strong>MyPiHUB</strong> for a better web.</p>
              <div className="footer-links">
                <a href="#hub">MyPatientHUB</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
              </div>
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;