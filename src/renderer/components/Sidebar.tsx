import React from 'react';
import { Shield, Lock, BarChart2, Zap, MoreHorizontal } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-letter">Q</span>
      </div>
      <nav>
        <ul>
          <li className="active"><a href="#status"><Shield /> <span>STATUS</span></a></li>
          <li><a href="#protection"><Lock /> <span>PROTECTION</span></a></li>
          <li><a href="#privacy"><Lock /> <span>PRIVACY</span></a></li>
          <li><a href="#performance"><BarChart2 /> <span>PERFORMANCE</span></a></li>
          <li><a href="#metaprotect"><Zap /> <span>metaProtect</span></a></li>
          <li><a href="#more"><MoreHorizontal /> <span>MORE</span></a></li>
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
      `}</style>
    </div>
  );
}