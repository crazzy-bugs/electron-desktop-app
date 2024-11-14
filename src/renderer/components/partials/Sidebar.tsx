import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, BarChart2,ShieldCheck,Contact} from 'lucide-react';

export default function Sidebar() {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState('status');
  console.log(window.location.pathname);

  const handleClick = (section:any) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-letter">Q</span>
      </div>
      <nav>
        <ul>
          <li
            className={activeSection === 'status' ? 'active' : ''}
            onClick={() => handleClick('status')}
          >
            <Link to="/">
              <BarChart2 /> <span>STATUS</span>
            </Link>
            {/* <a href="/status">
              <Shield /> <span>STATUS</span>
            </a> */}
          </li>
          <li
            className={activeSection === 'quarantinedfiles' ? 'active' : ''}
            onClick={() => handleClick('quarantinedfiles')}
          >
            <Link to="/quarantined">
              <Lock /> <span>QUARANTINED FILES</span>
            </Link>
          </li>
          <li
            className={activeSection === 'antivirus' ? 'active' : ''}
            onClick={() => handleClick('antivirus')}
          >
            <Link to="/antivirus">
              <ShieldCheck /> <span>ANTIVIRUS</span>
            </Link>
          </li>
          <li
            className={activeSection === 'support' ? 'active' : ''}
            onClick={() => handleClick('support')}
          >
            <Link to="/support">
              <Contact /> <span>SUPPORT</span>
            </Link>
          </li>
      
        </ul>
      </nav>

      <style>{`
        .sidebar {
          width: 120px;
          height: 90vh;
          background-color: #ce142b;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
          border-radius: 0 0 80px 0;
        }
        .logo {
          width: 50px;
          height: 50px;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          margin-bottom: 30px;
        }
        .logo-letter {
          color: #ce142b;
          font-size: 24px;
          font-weight: bold;
        }
        nav {
          flex-grow: 1;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        li {
          margin-bottom: 20px;
          width: 100%;
          text-align: center;
        }
        li.active {
          background-color: rgba(255, 255, 255, 0.2);
        }
        a {
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 0;
          width: 100%;
        }
        a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        a svg {
          margin-bottom: 5px;
        }
        .content {
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 10px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
