import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => (
  <div className="header">
    <h1>CII Shield Pro</h1>
    <div className="header-controls">
      <Bell />
    </div>
    <style>{`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .header h1 {
        font-size: 24px;
        font-weight: bold;
      }
      .header-controls {
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Header;