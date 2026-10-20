import React, { useState, useEffect } from 'react';
import './findDoctor.css';
import { 
  User, Stethoscope, Menu, LogOut, Search, MapPin, ChevronDown, ChevronUp, Star, X,
  Calendar, Building, MessageSquare, ShoppingBag, HeartPulse, Users, UserCheck, Settings, Heart, Shield, Eye, FileText, Clock, Bell
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const doctorsBySpecialty = {
  'Anesthesiology': [
    { id: 'an1', name: 'Dr. James Wilson', zipCode:"3950", specialty: 'Anesthesiology', rating: 4.9, exp: '14 Years', location: 'New York', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80', bio: 'Expert in pediatric & surgical anesthesia.' , },
    { id: 'an2', name: 'Dr. Marcus Vance', specialty: 'Anesthesiology', rating: 4.8, exp: '11 Years', location: 'Brooklyn', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80', bio: 'Specialist in chronic pain management.' },
    { id: 'an3', name: 'Dr. Elena Rostova', specialty: 'Anesthesiology', rating: 5.0, exp: '16 Years', location: 'Manhattan', img: 'data:image/webp;base64,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', bio: 'Senior critical care anesthesiologist.' },
    { id: 'an4', name: 'Dr. David Miller', specialty: 'Anesthesiology', rating: 4.7, exp: '8 Years', location: 'Queens', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80', bio: 'Focus on outpatient sedation & safety.' }
  ],
  'Dermatology': [
    { id: 'de1', name: 'Dr. Amanda Lopez', specialty: 'Dermatology', rating: 5.0, exp: '11 Years', location: 'New York', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80', bio: 'Clinical & cosmetic skin care expert.' },
    { id: 'de2', name: 'Dr. Chloe Bennett', specialty: 'Dermatology', rating: 4.9, exp: '9 Years', location: 'Staten Island', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80', bio: 'Laser therapy & acne specialist.' },
    { id: 'de3', name: 'Dr. Ethan Hunt', specialty: 'Dermatology', rating: 4.8, exp: '13 Years', location: 'Bronx', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80', bio: 'Surgical dermatologist & mole removal.' },
    { id: 'de4', name: 'Dr. Maya Lin', specialty: 'Dermatology', rating: 4.9, exp: '7 Years', location: 'Manhattan', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80', bio: 'Pediatric skin disorders expert.' }
  ],
  'Emergency medicine': [
    { id: 'em1', name: 'Dr. Emily Watson', specialty: 'Emergency medicine', rating: 4.9, exp: '15 Years', location: 'Manhattan', img: 'https://th.bing.com/th/id/OIP.sRrqCOxQVW43LmQiqfDEyAHaHa?w=168&h=180&c=7&r=0&o=7&pid=1.7&rm=3', bio: 'Emergency trauma & cardiac response.' },
    { id: 'em2', name: 'Dr. Robert Martinez', specialty: 'Emergency medicine', rating: 4.7, exp: '8 Years', location: 'Queens', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80', bio: 'Urgent care & critical resuscitation.' },
    { id: 'em3', name: 'Dr. Sarah Jenkins', specialty: 'Emergency medicine', rating: 4.9, exp: '12 Years', location: 'New York', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80', bio: 'Acute care and emergency triage.' },
    { id: 'em4', name: 'Dr. Alex Rivera', specialty: 'Emergency medicine', rating: 4.8, exp: '10 Years', location: 'Brooklyn', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80', bio: 'Pediatric emergency specialist.' }
  ],
  'Neurology': [
    { id: 'ne1', name: 'Dr. Sophia Patel', specialty: 'Neurology', rating: 4.8, exp: '13 Years', location: 'Manhattan', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80', bio: 'Brain health & migraine treatments.' },
    { id: 'ne2', name: 'Dr. Oliver Queen', specialty: 'Neurology', rating: 5.0, exp: '17 Years', location: 'New York', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80', bio: 'Epilepsy & memory disorders consultant.' },
    { id: 'ne3', name: 'Dr. Grace Hopper', specialty: 'Neurology', rating: 4.9, exp: '14 Years', location: 'Brooklyn', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80', bio: 'Neuro-rehabilitation & spine specialist.' },
    { id: 'ne4', name: 'Dr. Lucas Scott', specialty: 'Neurology', rating: 4.7, exp: '9 Years', location: 'Queens', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80', bio: 'Stroke care and nerve studies.' }
  ],
  'Consultation': [
    { id: 'co1', name: 'Dr. Michael Chen', specialty: 'Consultation', rating: 4.8, exp: '10 Years', location: 'Brooklyn', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80', bio: 'General health & preventative guidance.' },
    { id: 'co2', name: 'Dr. Hannah Abbott', specialty: 'Consultation', rating: 4.9, exp: '12 Years', location: 'Manhattan', img: 'data:image/webp;base64,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', bio: 'Holistic & wellness doctor.' },
    { id: 'co3', name: 'Dr. Samuel Jackson', specialty: 'Consultation', rating: 4.7, exp: '15 Years', location: 'Bronx', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80', bio: 'Second opinions & chronic care.' },
    { id: 'co4', name: 'Dr. Laura Croft', specialty: 'Consultation', rating: 5.0, exp: '8 Years', location: 'Staten Island', img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&auto=format&fit=crop&q=80', bio: 'Family healthcare planning.' }
  ],
  'Ophthalmology': [
    { id: 'op1', name: 'Dr. Daniel Kim', specialty: 'Ophthalmology', rating: 4.9, exp: '9 Years', location: 'Staten Island', img: 'https://th.bing.com/th/id/OIP.T1u6Gr1XJVQYQ6sjfQMlcgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3', bio: 'Laser vision & cataract surgery.' },
    { id: 'op2', name: 'Dr. Rachel Green', specialty: 'Ophthalmology', rating: 4.8, exp: '11 Years', location: 'New York', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80', bio: 'Cornea & retinal disease specialist.' },
    { id: 'op3', name: 'Dr. Bruce Wayne', specialty: 'Ophthalmology', rating: 5.0, exp: '16 Years', location: 'Manhattan', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80', bio: 'Pediatric eye care & glaucoma.' },
    { id: 'op4', name: 'Dr. Zoe Saldana', specialty: 'Ophthalmology', rating: 4.7, exp: '7 Years', location: 'Brooklyn', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&auto=format&fit=crop&q=80', bio: 'Optometry & refractive correction.' }
  ]
};

const specialServicesData = [
  { id: 'srv1', title: 'Primary Care and Internal MD', desc: 'our Doctors Partner with you to help you to reach your wellness', icon: Heart, details: 'Comprehensive routine checkups, blood tests, hypertension control, and continuous preventative care tailored to your lifestyle.' },
  { id: 'srv2', title: 'Emergency Care', desc: 'we provide emergency care for adults and children', icon: Stethoscope, details: '24/7 immediate trauma intervention, acute infection treatment, and emergency pediatric stabilization with state-of-the-art facilities.' },
  { id: 'srv3', title: 'Imaging Services', desc: 'From Xray to MR scan we offer advanced diagnostic tools', icon: Eye, details: 'High-definition Digital X-Ray, 3T MRI, Ultrasound, and CT scans with ultra-fast digital reporting by senior radiologists.' },
  { id: 'srv4', title: 'Urgent Care', desc: 'we offer urgent care for non-life threatening conditions', icon: Shield, details: 'Same-day appointments for minor fractures, sprains, fever, burns, and minor surgical procedures without long ER waiting hours.' }
];

const FindDoctor = ({ onNavigate, onLogout }) => {
  // در دسکتاپ پیش‌فرض باز، در موبایل پیش‌فرض بسته
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleBookAppointment = () => {
    if (!bookingDate || !bookingTime) {
      alert('Please select both date and time for your appointment.');
      return;
    }
    alert(`Appointment successfully booked with ${selectedDoctor.name} on ${bookingDate} at ${bookingTime}!`);
    setSelectedDoctor(null);
    setBookingDate('');
    setBookingTime('');
  };

  const allDoctors = Object.values(doctorsBySpecialty).flat();
  const searchResults = searchQuery
    ? allDoctors.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.specialty.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (

    <div className="dashboard-container">
    {/* اینجا سایدبار را اضافه کن */}
    <Sidebar 
      currentPage="findDoctor" 
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
              <span>🏠 / Searchdoctor</span>
              <h3>Searchdoctor</h3>
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
          <div className="doctor-hero-banner bubble-banner">
            <div className="hero-inner-content">
              <h1>Find a Doctor</h1>
              <p>Search Doctors and schedule an appointment</p>

              <form onSubmit={(e) => e.preventDefault()} className="doctor-search-form">
                <div className="search-input-box">
                  <Search size={18} color="#94a3b8" />
                  <input 
                    type="text" 
                    placeholder="Search a doctor by name, specialty"
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

                <button type="submit" className="btn-search-submit">SEARCH</button>
              </form>
            </div>
          </div>

          {searchQuery && (
            <section className="section-block">
              <h3 className="section-title">Search Results ({searchResults.length})</h3>
              <div className="doctors-square-grid">
                {searchResults.map(doc => (
                  <div key={doc.id} className="square-doctor-card hover-zoom-card">
                    <div className="square-img-box">
                      <img src={doc.img} alt={doc.name} />
                    </div>
                    <h4>{doc.name}</h4>
                    <p className="doc-spec">{doc.specialty}</p>
                    <div className="doc-stats">
                      <span><Star size={12} color="#f59e0b" fill="#f59e0b" /> {doc.rating}</span>
                      <span>•</span>
                      <span>{doc.exp}</span>
                    </div>
                    <button className="btn-slide-up" onClick={() => setSelectedDoctor(doc)}>View Details</button>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="section-block">
            <h2 className="section-title">Special Services</h2>
            <div className="services-grid">
              {specialServicesData.map(srv => {
                const IconComp = srv.icon;
                const isOpen = openDropdown === srv.id;

                return (
                  <div key={srv.id} className="service-card-wrapper">
                    <div className="service-card-header" onClick={() => toggleDropdown(srv.id)}>
                      <div className="service-icon-box">
                        <IconComp size={22} color="#e11d48" />
                      </div>
                      <div className="service-info">
                        <h3>{srv.title}</h3>
                        <p>{srv.desc}</p>
                      </div>
                      <div className="arrow-box">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="dropdown-service-info">
                        <p><FileText size={14} color="#2563eb" /> {srv.details}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="section-block">
            <div className="specialty-header-title">
              <h2>Find Doctors By Specialty</h2>
              <p>Select a Specialty to View all Doctors and schedule an Appointment</p>
            </div>

            <div className="specialties-grid">
              {Object.keys(doctorsBySpecialty).map((specKey, index) => {
                const specId = `spec-${index}`;
                const isOpen = openDropdown === specId;
                const doctorsList = doctorsBySpecialty[specKey];

                return (
                  <div key={specId} className="specialty-item-wrapper">
                    <div className="specialty-item-header" onClick={() => toggleDropdown(specId)}>
                      <span>{specKey}</span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>

                    {isOpen && (
                      <div className="dropdown-doctors-container">
                        <div className="doctors-square-grid">
                          {doctorsList.map(doc => (
                            <div key={doc.id} className="square-doctor-card hover-zoom-card">
                              <div className="square-img-box">
                                <img src={doc.img} alt={doc.name} />
                              </div>
                              <h4>{doc.name}</h4>
                              <p className="doc-spec">{doc.specialty}</p>
                              <div className="doc-stats">
                                <span><Star size={12} color="#f59e0b" fill="#f59e0b" /> {doc.rating}</span>
                                <span>•</span>
                                <span>{doc.exp}</span>
                              </div>
                              <button className="btn-slide-up" onClick={() => setSelectedDoctor(doc)}>View Details</button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {selectedDoctor && (
        <div className="doctor-modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="doctor-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedDoctor(null)}><X size={20} /></button>
            
            <div className="modal-header">
              <img src={selectedDoctor.img} alt={selectedDoctor.name} />
              <div>
                <h2>{selectedDoctor.name}</h2>
                <p className="spec-badge">{selectedDoctor.specialty}</p>
                <div className="modal-rating">
                  <Star size={16} color="#f59e0b" fill="#f59e0b" />
                  <span>{selectedDoctor.rating} • {selectedDoctor.exp} Experience</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <p><strong>Location:</strong> {selectedDoctor.location}</p>
              <p><strong>Biography:</strong> {selectedDoctor.bio}</p>

              <div className="booking-section">
                <h4>Schedule an Appointment</h4>
                <div className="booking-inputs">
                  <div className="input-group-field">
                    <Calendar size={16} color="#64748b" />
                    <input 
                      type="date" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                    />
                  </div>
                  <div className="input-group-field">
                    <Clock size={16} color="#64748b" />
                    <input 
                      type="time" 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                    />
                  </div>
                </div>
                <button className="btn-book-now" onClick={handleBookAppointment}>Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindDoctor;