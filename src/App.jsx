import React, { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FindPharmacy from './pages/findPharmacy';
import MyDependents from './pages/MyDependents';
import FindDoctor from './pages/findDoctor';
import FindClinic from './pages/FindClinic';
import Marketplace from './pages/Marketplace';
import Settings from './pages/Settings';

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

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'findPharmacy':
      case 'FindPharmacy':
        return <FindPharmacy onNavigate={handleNavigate} />;
      case 'MyDependents':
        return <MyDependents onNavigate={handleNavigate} />;
      case 'findDoctor':
      case 'FindDoctor':
        return <FindDoctor onNavigate={handleNavigate} />;
      case 'FindClinic':
        return <FindClinic onNavigate={handleNavigate} />;
      case 'Marketplace':
        return <Marketplace onNavigate={handleNavigate} />;
      case 'Settings':
        return <Settings onNavigate={handleNavigate} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
}

export default App;