import React, { useState } from 'react';
import './MyDependents.css';
import { 
  User, Stethoscope, Menu, LogOut, Search, X, Calendar, Building,
  MessageSquare, ShoppingBag, HeartPulse, Users, UserCheck, Settings as SettingsIcon, Bell
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const MyDependents = ({ onNavigate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthMonth: 'February',
    birthDay: '1',
    birthYear: '2021',
    relation: '',
    gender: 'Male'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="dashboard-container">
    {/* اینجا سایدبار را اضافه کن */}
    <Sidebar 
      currentPage="MyDependents" 
      onNavigate={onNavigate} 
      isOpen={isOpen} 
      setIsOpen={setIsOpen} 
    /> 


      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={22} />
            </button>
            <div className="breadcrumb">
              <span>🏠 / Mydependents</span>
              <h3>Mydependents</h3>
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

        <div className="dependents-container">
          <div className="dependents-header">
            <h2>Build Your Profile</h2>
            <p>This information will let us know more about your Family.</p>
          </div>

          <div className="stepper-wrapper">
            <div className={`step-item ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-circle">1</div>
              <span className="step-label">Dependents Registration</span>
            </div>
            <div className="step-line"></div>
            <div className={`step-item ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-circle">2</div>
              <span className="step-label">Dependents Health Lifestyle</span>
            </div>
            <div className="step-line"></div>
            <div className={`step-item ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <span className="step-label">Family Care Plan</span>
            </div>
          </div>

          <div className="dependents-card">
            <div className="form-section-title">
              <h3>Let's start with the basic information</h3>
              <p>Let us know With name and last name, contacting you at</p>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Eg. Michael" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Eg. Tomson" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className="form-grid-2">
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
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                   
                  </select>
                  <select name="birthYear" value={formData.birthYear} onChange={handleChange}>
                  <option value="1990">1990</option>
                  <option value="1991">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label>Relation</label>
                <input 
                  type="text" 
                  name="relation" 
                  placeholder="Eg. Brother, Child" 
                  value={formData.relation} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>I'm</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-actions-row">
              <button className="btn-next-step" onClick={handleNext}>NEXT</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyDependents;