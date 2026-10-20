import React from 'react';
import { 
  LayoutDashboard, 
  UserCheck, 
  Building2, 
  MessageSquare, 
  Store, 
  Pill, 
  Users, 
  Settings, 
  HelpCircle,
  X 
} from 'lucide-react';

const Sidebar = ({ currentPage, onNavigate, isOpen, setIsOpen }) => {
  // تمام نام‌ها دقیقاً با switch-case در App.jsx یکی هستند
  const navItems = [
    { name: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { name: 'FindDoctor', label: 'Find Doctor', icon: UserCheck },
    { name: 'FindClinic', label: 'Find Clinic', icon: Building2 },
    { name: 'Marketplace', label: 'Find MarketPlace', icon: Store },
    { name: 'FindPharmacy', label: 'Find Pharmacy', icon: Pill },
    { name: 'MyDependents', label: 'My Dependents', icon: Users },
    { name: 'Settings', label: 'Settings', icon: Settings },
  ];

  const handleNav = (pageName) => {
    if (onNavigate) {
      onNavigate(pageName);
    }
    // بستن سایدبار در موبایل بعد از کلیک
    if (window.innerWidth <= 768 && setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-top">
        <div className="logo-container">
          <div className="logo-icon">M</div>
          <span className="logo-text">MyPatientHUB</span>
        </div>
        {setIsOpen && (
          <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.name;
          return (
            <button
              key={item.name}
              type="button"
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNav(item.name)}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

    
    </aside>
  );
};

export default Sidebar;