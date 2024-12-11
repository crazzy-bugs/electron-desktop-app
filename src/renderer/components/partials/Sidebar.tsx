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
        <div className="logo-icon"><svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" fill="#fff" rx="10" ry="10"/><svg x="6" y="4" width="30" height="32" viewBox="-1 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#7cfc00" d="M7.304 2.305C5.719 4.007 6.158 6.727 6.158 6.727a6.45 6.45 0 0 0 4.81 1.92h-.01a6.46 6.46 0 0 0 4.799-1.919l.001-.001s.431-2.683-1.12-4.387c.971-.541 1.542-1.322 1.306-1.853-.268-.599-1.45-.652-2.646-.119-.43.19-.799.43-1.124.72l.004-.004a6.5 6.5 0 0 0-1.22-.114h-.001a7 7 0 0 0-1.192.104l.042-.006A4.2 4.2 0 0 0 8.738.379L8.711.368c-1.196-.531-2.38-.48-2.646.119-.236.519.305 1.279 1.238 1.818zm12.028 12.39a6 6 0 0 0-.687-.103l-.025-.002c0-.064.011-.124.011-.19a11.8 11.8 0 0 0-.391-2.962l.018.082a3.7 3.7 0 0 0 1.782-.363l-.022.01c1.2-.534 1.949-1.45 1.68-2.045s-1.45-.652-2.646-.119a3.9 3.9 0 0 0-1.317.924l-.002.002c-.249-.6-.517-1.11-.824-1.592l.025.041a9.35 9.35 0 0 1-4.972 2.126l-.043.004v9.649a.96.96 0 0 1-1.92 0v-9.645a9.4 9.4 0 0 1-5.025-2.143l.015.012c-.271.42-.531.906-.752 1.413l-.026.067a4.1 4.1 0 0 0-1.232-.847l-.026-.01c-1.2-.531-2.38-.48-2.646.119s.487 1.513 1.68 2.045a3.75 3.75 0 0 0 1.622.363h.043-.002c-.231.861-.366 1.85-.37 2.871v.003c0 .066.011.127.013.195q-.303.032-.623.098c-1.558.32-2.752 1.128-2.664 1.793s1.424.945 2.986.62q.304-.064.593-.152a10.8 10.8 0 0 0 1.349 3.384l-.027-.047a4.2 4.2 0 0 0-1.08.799l-.001.001c-.96.956-1.344 2.117-.866 2.596s1.639.09 2.595-.864q.384-.384.668-.85l.011-.02a6.72 6.72 0 0 0 4.719 2.043h.006a6.74 6.74 0 0 0 4.781-2.095l.003-.003c.204.35.439.652.708.92.954.956 2.117 1.344 2.596.866s.09-1.638-.866-2.593a4.3 4.3 0 0 0-1.128-.826l-.025-.011A10.6 10.6 0 0 0 18.325 17l.013-.071c.215.067.441.131.677.182 1.561.32 2.897.047 2.987-.62s-1.111-1.471-2.67-1.793z"/></svg></svg></div>
        <span className="logo-text">VitalCore</span>
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
              Dashboard
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
          {/* <li
            className={activeSection === '/security' ? 'active' : ''}
            onClick={() => handleClick('/security')}
          >
            <Link to="/security" className="nav-item">
              <Shield className="nav-icon" />
              Security
            </Link>
          </li> */}
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
      display: flex;
      align-items: center;
      margin-left: 20px;
  }

  .logo-icon {
    border-radius: 4px;
    margin-left: 5px;
  }

  .logo-text {
    font-size: 18px;
    font-weight: 500;
    margin-left: 5px;
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
    background-color: #2e8b57; /* Green shade for active state */
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
