import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FindPharmacy from './pages/findPharmacy';
import MyDependents from './pages/MyDependents';
import FindDoctor from './pages/findDoctor';
import FindClinic from './pages/FindClinic';       // اضافه شد
import Marketplace from './pages/Marketplace';     // اضافه شد (اگر نام فایل‌ات متفاوت است، اصلاح کن)
import Settings from './pages/Settings';           // اضافه شد (اگر نام فایل‌ات متفاوت است، اصلاح کن)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('Dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('Dashboard');
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // تمام صفحات پروژه‌ات اینجا پوشش داده شدند
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'FindPharmacy':
        return <FindPharmacy onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'MyDependents':
        return <MyDependents onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'FindDoctor':
        return <FindDoctor onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'FindClinic':
        return <FindClinic onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'Marketplace':
        return <Marketplace onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'Settings':
        return <Settings onNavigate={handleNavigate} onLogout={handleLogout} />;
      default:
        return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
    }
  };

  return (
    <div className="app-container">
      {renderCurrentPage()}
    </div>
  );
}

export default App;