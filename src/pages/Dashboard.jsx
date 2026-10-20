import React, { useState } from 'react';
import './Dashboard.css';
import { 
  LayoutDashboard, 
  Calendar, 
  UserCheck, 
  Building2, 
  MessageSquare, 
  Store, 
  Pill, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  HelpCircle,
  X,
 Bell,
 Search
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ onNavigate, onLogout }) => {
  // در لپ‌تاپ پیش‌فرض باز (true) و در موبایل پیش‌فرض بسته (false)
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    if (window.innerWidth <= 768) {
      setIsOpen(false); // در موبایل با کلیک روی منوها، سایدبار بسته شود
    }
  };

  return (
  <div className="dashboard-container">
    {/* اینجا سایدبار را اضافه کن */}
    <Sidebar 
      currentPage="Dashboard" 
      onNavigate={onNavigate} 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
    /> 

      {/* بخش اصلی */}
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <div className="breadcrumb">
              <span>/ Dashboard</span>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div className="header-actions">
  {/* ۱. باکس جستجو */}
  <div className="top-search-bar">
    <Search size={16} color="#94a3b8" />
    <input type="text" placeholder="Type here..." />
  </div>

  {/* ۲. دکمه خروج */}
  <button className="logout-btn" onClick={onLogout}>
    <LogOut size={16} /> Log out
  </button>

  {/* ۳. آیکون تنظیمات */}
  <button className="header-icon-btn" onClick={() => onNavigate && onNavigate('Settings')}>
    <Settings size={18} />
  </button>

  {/* ۴. آیکون زنگوله */}
  <button className="header-icon-btn">
    <Bell size={18} />
  </button>
</div>

        </header>

        <div className="dashboard-content">
          <div className="welcome-banner">
            <h2>Welcome To MyPatientHUB!</h2>
          </div>

          <div className="charts-grid-2x2">
            
            {/* 1. Promotion by Clinics */}
            <div className="chart-card-block">
              <h3>Promotion by Clinics</h3>
              <div className="donut-chart-flex">
                <div className="donut-graphic animated-ring" style={{ background: 'conic-gradient(#e11d48 0% 30%, #2563eb 30% 38%, #eab308 38% 52%, #22c55e 52% 95%, #475569 95% 100%)' }}>
                  <div className="donut-hole"></div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="dot" style={{background: '#e11d48'}}></span><span className="name">Klinik Lee Healthcare</span><span className="value">19%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#2563eb'}}></span><span className="name">Klinik Bandar Baru Nilai</span><span className="value">4%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#eab308'}}></span><span className="name">Klinik Mediviron Giant Nilai</span><span className="value">10%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#22c55e'}}></span><span className="name">KLINIK NILAI IMPIAN</span><span className="value">21%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#475569'}}></span><span className="name">Klinik Mediviron</span><span className="value">2%</span></div>
                  <button className="btn-slide-up" onClick={() => handleNavClick('FindClinic')}>MORE DETAILS</button>
                </div>
              </div>
            </div>

            {/* 2. Promotion by Pharmacies */}
            <div className="chart-card-block">
              <h3>Promotion by Pharmacies</h3>
              <div className="donut-chart-flex">
                <div className="donut-graphic animated-ring" style={{ background: 'conic-gradient(#2563eb 0% 28%, #93c5fd 28% 45%, #e11d48 45% 50%, #22c55e 50% 65%, #1e293b 65% 100%)' }}>
                  <div className="donut-hole"></div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="dot" style={{background: '#e11d48'}}></span><span className="name">ALPRO PHARMACY NILAI</span><span className="value">15%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#2563eb'}}></span><span className="name">ALPRO PHARMACY PEKAN NILAI</span><span className="value">12%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#93c5fd'}}></span><span className="name">OK PHARMACY</span><span className="value">5%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#22c55e'}}></span><span className="name">PHARMART PHARMACY NILAI</span><span className="value">9%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#1e293b'}}></span><span className="name">Health Lane Family Pharmacy</span><span className="value">14%</span></div>
                  <button className="btn-slide-up" onClick={() => handleNavClick('FindPharmacy')}>MORE DETAILS</button>
                </div>
              </div>
            </div>

            {/* 3. Smart Market Usage by app */}
            <div className="chart-card-block">
              <h3>Smart Market Usage by app</h3>
              <div className="donut-chart-flex">
                <div className="donut-graphic animated-ring" style={{ background: 'conic-gradient(#1e293b 0% 25%, #93c5fd 25% 28%, #e2e8f0 28% 100%)' }}>
                  <div className="donut-hole"></div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item"><span className="dot" style={{background: '#1e293b'}}></span><span className="name">Food Panda</span><span className="value">25%</span></div>
                  <div className="legend-item"><span className="dot" style={{background: '#93c5fd'}}></span><span className="name">Grab Food</span><span className="value">3%</span></div>
                </div>
              </div>
            </div>

            {/* 4. Health Index */}
            <div className="chart-card-block">
              <h3>Health Index</h3>
              <div>
                <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 'bold' }}>70% <span style={{ color: '#22c55e', fontSize: '14px' }}>+3%</span></h2>
                <svg viewBox="0 0 500 100" style={{ width: '100%', height: '60px', marginTop: '10px' }}>
                  <path d="M 0 80 Q 100 10 200 70 T 400 30 T 500 80" fill="none" stroke="#1e293b" strokeWidth="3" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;