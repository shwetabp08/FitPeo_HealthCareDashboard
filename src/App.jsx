// import React from 'react';
// import DashboardLayoutSlots from './components/DashboardMui';
// import Sidebar from './components/Sidebar/Sidebar';
// import Header from './components/Header/Header';
// import DashboardMainContent from './components/MainDashboard/MainDashboard';
// import styles from './App.module.css'

// function App() {
//   return (
//     <>
//       {/* <DashboardLayoutSlots /> */}
//       <div className={styles.container}>
//       <aside className={styles.sidebar}><Sidebar/></aside>
//       <section className={styles.mainSection}>
//         <Header/>
//         <DashboardMainContent/>
//       </section>
//     </div>
//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import MainDashboard from './components/MainDashboard/MainDashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('dashboard');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="container-fluid p-0">
      
      <Header toggleSidebar={toggleSidebar} />
      <div className="row g-0">
        <div className="col-lg-2">
          <Sidebar
            activeSegment={activeSegment}
            setActiveSegment={setActiveSegment}
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div className="col-lg-10">
          <MainDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;

