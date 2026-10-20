import React, { useState, useEffect } from 'react';
import './findClinic.css';
import { 
  User, Stethoscope, Menu, LogOut, Search, MapPin, ChevronDown, ChevronUp, X,
  Calendar, Building, MessageSquare, ShoppingBag, HeartPulse, Users, UserCheck, Settings, Bell
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const FindClinic = ({ onNavigate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // استیت‌های مربوط به سرچ‌باکس‌ها
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  // استیت‌های مربوط به فیلترها و دراپ‌داون‌ها
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedGender, setSelectedGender] = useState('Any Gender');
  const [selectedCondition, setSelectedCondition] = useState('Select Condition');
  const [selectedLanguage, setSelectedLanguage] = useState('Any Language');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // تابع عملکرد دکمه سرچ
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery && !locationQuery) {
      alert('Please enter a search term or location.');
      return;
    }
    alert(`Searching clinics for: "${searchQuery}" in "${locationQuery || 'Current Area'}"`);
  };

  // تابع دکمه Current Location
  const handleCurrentLocation = () => {
    setLocationQuery('Current Location (Detected)');
    alert('Current location successfully detected!');
  };

  return (
    <div className="dashboard-container">
    {/* اینجا سایدبار را اضافه کن */}
    <Sidebar 
      currentPage="FindClinic" 
      onNavigate={onNavigate} 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
    />       
      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={toggleSidebar}>
              <Menu size={22} />
            </button>
            <div className="breadcrumb">
              <span>🏠 / FindClinic</span>
              <h3>FindClinic</h3>
            </div>
          </div>
          
          <div className="header-actions">
  {/* ۱. باکس جستجو */}
  <div className="top-search-bar">
    <Search size={16} color="#94a3b8" />
    <input type="text" placeholder="Type here..." />
  </div>

  {/* ۲. دکمه خروج (Log out) */}
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
          {/* بنر بالای صفحه با حباب‌های نوری گرادینت تاریک */}
          <div className="doctor-hero-banner bubble-banner">
            <div className="hero-inner-content">
              <h1>Find a Clinic</h1>
              <p>Search Clinics and schedule an appointment with doctors through Clinic</p>

              <form onSubmit={handleSearchSubmit} className="doctor-search-form">
                <div className="search-input-box">
                  <Search size={18} color="#94a3b8" />
                  <input 
                    type="text" 
                    placeholder="Search clinics, doctors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="search-input-box">
                  <MapPin size={18} color="#94a3b8" />
                  <input 
                    type="text" 
                    placeholder="Zip Code or Neighborhood"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>

                <button type="button" className="btn-current" onClick={handleCurrentLocation}>CURRENT</button>
                <button type="submit" className="btn-search-submit">SEARCH</button>
              </form>
            </div>
          </div>

          {/* بدنه اصلی شامل فیلترها و نقشه */}
          <div className="clinic-main-layout">
            {/* ستون فیلترها */}
            <div className="clinic-filter-sidebar">
              <h3>Filter By</h3>

              {/* دراپ‌داون Specialty */}
              <div className="filter-dropdown-box">
                <div className="filter-dropdown-header" onClick={() => toggleDropdown('specialty')}>
                  <span>{selectedSpecialty}</span>
                  {activeDropdown === 'specialty' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {activeDropdown === 'specialty' && (
                  <div className="filter-dropdown-list">
                    <p onClick={() => { setSelectedSpecialty('All Specialties'); setActiveDropdown(null); }}>All Specialties</p>
                    <p onClick={() => { setSelectedSpecialty('Cardiology'); setActiveDropdown(null); }}>Cardiology</p>
                    <p onClick={() => { setSelectedSpecialty('Dermatology'); setActiveDropdown(null); }}>Dermatology</p>
                    <p onClick={() => { setSelectedSpecialty('Neurology'); setActiveDropdown(null); }}>Neurology</p>
                  </div>
                )}
              </div>

              {/* دراپ‌داون Gender */}
              <div className="filter-dropdown-box">
                <div className="filter-dropdown-header" onClick={() => toggleDropdown('gender')}>
                  <span>{selectedGender}</span>
                  {activeDropdown === 'gender' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {activeDropdown === 'gender' && (
                  <div className="filter-dropdown-list">
                    <p onClick={() => { setSelectedGender('Any Gender'); setActiveDropdown(null); }}>Any Gender</p>
                    <p onClick={() => { setSelectedGender('Male'); setActiveDropdown(null); }}>Male</p>
                    <p onClick={() => { setSelectedGender('Female'); setActiveDropdown(null); }}>Female</p>
                  </div>
                )}
              </div>

              {/* دراپ‌داون Condition */}
              <div className="filter-dropdown-box">
                <div className="filter-dropdown-header" onClick={() => toggleDropdown('condition')}>
                  <span>{selectedCondition}</span>
                  {activeDropdown === 'condition' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {activeDropdown === 'condition' && (
                  <div className="filter-dropdown-list">
                    <p onClick={() => { setSelectedCondition('Select Condition'); setActiveDropdown(null); }}>Select Condition</p>
                    <p onClick={() => { setSelectedCondition('Fever & Cold'); setActiveDropdown(null); }}>Fever & Cold</p>
                    <p onClick={() => { setSelectedCondition('Joint Pain'); setActiveDropdown(null); }}>Joint Pain</p>
                  </div>
                )}
              </div>

              {/* دراپ‌داون Languages */}
              <div className="filter-dropdown-box">
                <div className="filter-dropdown-header" onClick={() => toggleDropdown('language')}>
                  <span>{selectedLanguage}</span>
                  {activeDropdown === 'language' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {activeDropdown === 'language' && (
                  <div className="filter-dropdown-list">
                    <p onClick={() => { setSelectedLanguage('Any Language'); setActiveDropdown(null); }}>Any Language</p>
                    <p onClick={() => { setSelectedLanguage('English'); setActiveDropdown(null); }}>English</p>
                    <p onClick={() => { setSelectedLanguage('Persian / Dari'); setActiveDropdown(null); }}>Persian / Dari</p>
                  </div>
                )}
              </div>

              <div className="filter-section-group">
                <h4>Providers Who Treat</h4>
                <label className="checkbox-label"><input type="checkbox" /> All Ages</label>
                <label className="checkbox-label"><input type="checkbox" /> Children</label>
                <label className="checkbox-label"><input type="checkbox" /> Adults</label>
              </div>

              <div className="filter-section-group">
                <h4>View Only</h4>
                <label className="checkbox-label"><input type="checkbox" /> Online Scheduling</label>
                <label className="checkbox-label"><input type="checkbox" /> Primary Care</label>
              </div>
            </div>

            {/* بخش نقشه در سمت راست */}
            <div className="clinic-map-container">
              <div className="map-view-tabs">
                <button className="map-tab active">Map</button>
                <button className="map-tab">Satellite</button>
              </div>
              <div className="map-frame-box">
                <div className="mock-google-map">
                  <div className="map-watermark">Google</div>
                  <div className="map-pin pin-1">📍</div>
                  <div className="map-pin pin-2">📍</div>
                  <div className="map-pin pin-3">📍</div>
                  <div className="map-pin pin-4">📍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FindClinic;