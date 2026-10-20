import React from 'react';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children, onNavigate, onLogout }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* ۱. سایدبار در سمت چپ */}
      <Sidebar onNavigate={onNavigate} />

      {/* ۲. بخش اصلی صفحه و فوتر */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          {React.cloneElement(children, { onNavigate, onLogout })}
        </div>
        
        {/* ۳. فوتر در پایین */}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;