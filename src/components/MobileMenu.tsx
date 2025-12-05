import { Offcanvas, Nav } from 'react-bootstrap';
import { FaHome, FaStar, FaBroadcastTower } from 'react-icons/fa';

interface MobileMenuProps {
  show: boolean;
  onHide: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const MobileMenu = ({ show, onHide, activeSection, onSectionChange }: MobileMenuProps) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <FaHome size={20} /> },
    { id: 'novita', label: 'Novità', icon: <FaStar size={20} /> },
    { id: 'radio', label: 'Radio', icon: <FaBroadcastTower size={20} /> },
  ];

  const handleItemClick = (section: string) => {
    onSectionChange(section);
    onHide();
  };

  return (
    <Offcanvas 
      show={show} 
      onHide={onHide} 
      placement="start"
      className="bg-dark text-light"
    >
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title className="d-flex align-items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="me-2">
            <path d="M23.994 6.124c0-.294-.041-.537-.124-.732-.247-.684-.907-1.122-1.652-1.122h-2.86c-.248 0-.487.06-.701.168l-9.712 4.856c-.065.033-.123.074-.179.119-.007.005-.011.01-.018.016l-.142.14c-.013.013-.024.028-.036.042-.11.136-.193.296-.254.476-.017.05-.03.102-.041.155-.002.01-.004.02-.006.031-.015.086-.025.175-.025.266v7.456c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V9.483l8.73-4.365v5.388c-.485-.345-1.087-.554-1.736-.554-1.66 0-3.007 1.347-3.007 3.007s1.347 3.007 3.007 3.007 3.007-1.347 3.007-3.007V6.124z"/>
          </svg>
          Music
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        <Nav className="flex-column">
          {menuItems.map((item) => (
            <Nav.Link
              key={item.id}
              className={`d-flex align-items-center px-4 py-3 text-light ${
                activeSection === item.id ? 'bg-secondary bg-opacity-25' : ''
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="me-3">{item.icon}</span>
              <span className="fw-normal">{item.label}</span>
            </Nav.Link>
          ))}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;