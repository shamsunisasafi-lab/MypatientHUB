# 🏥 MyPatientHUB - Healthcare Management Platform

**MyPatientHUB** is a modern, responsive, and user-centric web application built with **React.js**. It provides a unified healthcare ecosystem for managing appointments, exploring clinics and medical products, searching for prescribed medications, and organizing family dependencies efficiently.

---

## 🌟 Key Modules & Features

1. **📊 Dashboard (`Dashboard.jsx`):**
   - Overview of active appointments and health summary metrics.
   - Dynamic cards rendered seamlessly without redundant code.

2. **👨‍⚕️ Find Doctor (`FindDoctor.jsx`):**
   - Real-time search and dynamic filtering by specialty and physician name.
   - Interactive modal popups for quick appointment bookings.

3. **🏥 Find Clinic (`FindClinic.jsx`):**
   - Explore specialized medical centers and clinics.
   - Detailed location and service filtering.

4. **🛍️ Marketplace (`FindMarketplace.jsx`):**
   - Browse medical equipment, healthcare kits, and wellness packages.
   - Interactive product showcase.

5. **💊 Find Pharmacy (`FindPharmacy.jsx`):**
   - Search for essential medicines and medical supplies.
   - Integrated shopping cart with dynamic item counters and drawers.

6. **👨‍👩‍👧‍👦 My Dependents (`MyDependents.jsx`):**
   - Manage sub-profiles for family members and health record tracking.

7. **⚙️ Settings (`Settings.jsx`):**
   - Profile preferences, security settings, and interface customizations.

---

## 🛠️ Technical Stack & Implementation

- **Frontend Core:** React.js (Vite), JavaScript (ES6+)
- **Styling & UI:** Custom CSS, Glassmorphic Design, Responsive Grid/Flexbox
- **Icons:** Lucide-React
- **State Management & Logic:**
  - `useState` for interactive cart management, search inputs, and modal visibility.
  - `useEffect` for synchronized data loading without page reloads.
  - `Array.map` for clean component iteration.
  - `Array.filter` & `.includes()` for real-time live search functionality.
  - **Conditional Rendering** for smooth UI state transitions.

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your local machine:

```bash
# 1. Clone the repository
git clone [https://github.com/shamsunisasafi-lab/MypatientHUB.git](https://github.com/shamsunisasafi-lab/MypatientHUB.git)

# 2. Navigate to the project folder
cd MypatientHUB

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
