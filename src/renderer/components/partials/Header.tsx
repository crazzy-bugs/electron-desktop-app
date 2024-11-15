import React,{ useState } from 'react';
import { Bell, BellDot } from 'lucide-react';


const Header = () => {
  const [hasNotification, setHasNotification] = useState(true); //TODO: change it later

  return(
    <div className="header">
      <h1>CII Shield Pro</h1>
      <div className="header-controls">
        <button>
          {hasNotification ? <BellDot color='red' size={24} /> : <Bell size={24} />}
        </button>
      </div>
      <style>{`
        .header {
        height: fit-content;
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
        .header-controls button {
          backgrond-color: inherit;
          border: none;
        cursor: pointer;
        transition: transform 0.2s;
            }
            .header-controls button:hover {
        transform: rotate(15deg);
            }
        }
      `}</style>
    </div>
  );
}

export default Header;
