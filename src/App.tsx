import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import MobilePlayer from './components/MobilePlayer';
import NovitatPage from './pages/NovitatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('novita');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Router>
      <div className="app-container bg-dark">
        <Header onMenuToggle={() => setShowMobileMenu(true)} />
        <MobileMenu
          show={showMobileMenu}
          onHide={() => setShowMobileMenu(false)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="d-flex">
          <Sidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <main className="flex-grow-1 overflow-auto" style={{ height: 'calc(100vh - 64px)', paddingBottom: '80px' }}>
            {activeSection === 'novita' && <NovitatPage />}
            {activeSection === 'home' && (
              <div className="text-white p-5">
                <h1>Home - Coming Soon</h1>
              </div>
            )}
            {activeSection === 'radio' && (
              <div className="text-white p-5">
                <h1>Radio - Coming Soon</h1>
              </div>
            )}
          </main>
        </div>
        {/* Mobile Player - visible only on mobile */}
        <MobilePlayer />
      </div>
    </Router>
  );
}

export default App;