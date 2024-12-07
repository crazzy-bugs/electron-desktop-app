import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutGrid,
  BarChart2,
  Users,
  Package,
  MessageSquare,
  Mail,
  Settings,
  Shield,
  Lock,
  ShieldCheck,
  Contact,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState(window.location.pathname);

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon"></div>
        <span className="logo-text">CII Shield</span>
      </div>

      <div className="section-title">Menu</div>
      <nav>
        <ul className="nav-list">
          <li
            className={activeSection === '/' ? 'active' : ''}
            onClick={() => handleClick('/')}
          >
            <Link to="/" className="nav-item">
              <LayoutGrid className="nav-icon" />
              Overview
            </Link>
          </li>
          <li
            className={activeSection === '/statistics' ? 'active' : ''}
            onClick={() => handleClick('/statistics')}
          >
            <Link to="/statistics" className="nav-item">
              <BarChart2 className="nav-icon" />
              Statistics
            </Link>
          </li>
        
          {/* <li
            className={activeSection === '/messages' ? 'active' : ''}
            onClick={() => handleClick('/messages')}
          >
            <Link to="/messages" className="nav-item">
              <MessageSquare className="nav-icon" />
              Messages
            </Link>
          </li> */}
          {/* <li
            className={activeSection === '/transactions' ? 'active' : ''}
            onClick={() => handleClick('/transactions')}
          >
            <Link to="/transactions" className="nav-item">
              <Mail className="nav-icon" />
              Transactions
            </Link>
          </li> */}
        </ul>
      </nav>

      <div className="section-title">General</div>
      <nav>
        <ul className="nav-list">
          <li
            className={activeSection === '/settings' ? 'active' : ''}
            onClick={() => handleClick('/settings')}
          >
            <Link to="/settings" className="nav-item">
              <Settings className="nav-icon" />
              Settings
            </Link>
          </li>
          <li
            className={activeSection === '/security' ? 'active' : ''}
            onClick={() => handleClick('/security')}
          >
            <Link to="/security" className="nav-item">
              <Shield className="nav-icon" />
              Security
            </Link>
          </li>
          <li
            className={activeSection === '/quarantined' ? 'active' : ''}
            onClick={() => handleClick('/quarantined')}
          >
            <Link to="/quarantined" className="nav-item">
              <Lock className="nav-icon" />
              Quarantined Files
            </Link>
          </li>
          <li
            className={activeSection === '/antivirus' ? 'active' : ''}
            onClick={() => handleClick('/antivirus')}
          >
            <Link to="/antivirus" className="nav-item">
              <ShieldCheck className="nav-icon" />
              Antivirus
            </Link>
          </li>
          <li
            className={activeSection === '/support' ? 'active' : ''}
            onClick={() => handleClick('/support')}
          >
            <Link to="/support" className="nav-item">
              <Contact className="nav-icon" />
              Support
            </Link>
          </li>
        </ul>
      </nav>

      <style>{`
        .sidebar {
          width: 200px;
          background-color: #043927;
          color: white;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          height: 90vh;
          font-size: 15px;
          border-radius : 0px 0px 120px 0px;
        }

        .logo {
          padding: 0 24px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 24px;
          height: 24px;
          background-color: #7CFC00;
          border-radius: 4px;
          position: relative;
        }

        .logo-icon::before {
          content: "★";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 14px;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 500;
        }

        .section-title {
          padding: 0 24px;
          margin: 16px 0 8px;
          font-size: 12px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.5px;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-item {
          padding: 12px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          border-radius: 8px;
          margin: 0 8px;
        }

        .nav-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .nav-item.active {
          color: white;
          background-color: rgba(255, 255, 255, 0.15);
        }

        .nav-icon {
          width: 20px;
          height: 20px;
          color: #ADFF2F;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
