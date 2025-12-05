import { Nav } from 'react-bootstrap';
import { FaHome, FaStar, FaBroadcastTower } from 'react-icons/fa';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome size={16} /> },
    { id: 'novita', label: 'Novità', icon: <FaStar size={16} /> },
    { id: 'radio', label: 'Radio', icon: <FaBroadcastTower size={16} /> },
  ];

  return (
    <div className="d-none d-md-flex flex-column text-light" style={{ 
      width: '170px', 
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: '#1a1a1a',
      borderRight: '1px solid #2a2a2a'
    }}>
      {/* Logo & Search */}
      <div className="px-3 py-3">
        <div className="d-flex align-items-center gap-2 mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.994 6.124c0-.294-.041-.537-.124-.732-.247-.684-.907-1.122-1.652-1.122h-2.86c-.248 0-.487.06-.701.168l-9.712 4.856c-.065.033-.123.074-.179.119-.007.005-.011.01-.018.016l-.142.14c-.013.013-.024.028-.036.042-.11.136-.193.296-.254.476-.017.05-.03.102-.041.155-.002.01-.004.02-.006.031-.015.086-.025.175-.025.266v7.456c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V9.483l8.73-4.365v5.388c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V6.124z"/>
          </svg>
          <span style={{ fontSize: '17px', fontWeight: 600 }}>Music</span>
        </div>
        
        <input 
          type="text" 
          placeholder="Cerca" 
          className="form-control form-control-sm text-white"
          style={{ 
            backgroundColor: '#2a2a2a',
            border: 'none',
            borderRadius: '8px', 
            fontSize: '13px',
            padding: '8px 12px'
          }}
        />
      </div>

      {/* Navigation */}
      <Nav className="flex-column">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.id}
            href="#"
            className={`d-flex align-items-center gap-2 px-3 py-2 ${
              activeSection === item.id ? 'text-danger' : 'text-light'
            }`}
            style={{ 
              fontSize: '14px',
              backgroundColor: activeSection === item.id ? '#2a2a2a' : 'transparent',
              transition: 'all 0.2s'
            }}
            onClick={(e) => {
              e.preventDefault();
              onSectionChange(item.id);
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;