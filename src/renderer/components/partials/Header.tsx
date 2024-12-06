import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, PlusCircle } from 'lucide-react';
import ApiClient from '../../../api/client';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  interface Notification {
    id: number;
    title: string;
    body: string;
    is_read: number;
    created_at: string;
  }

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchNotifications = async () => {
    try {
      const data = await fetch(
        'http://localhost:3000/notifications?limit=4',
      ).then((response) => response.json());
      setNotifications(data);
      console.log('Notifications:', data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  React.useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <header className="header-bar">
      {/* Left Section */}
      {/* Updated at 2021-10-06 15:00:00 */}
      {/* Center Section */}
      <div className="header-center"></div>

      {/* Right Section */}
      <div className="header-right">
        <button
          className="icon-button"
          onClick={() => setShowNotifications(true)}
        >
          <Bell />
        </button>
        {showNotifications && (
          <div className="notification-modal">
            <div className="notification-modal-content">
              <button
                className="close-button"
                onClick={() => setShowNotifications(false)}
              >
                ×
              </button>
              <h2>Notification History</h2>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div key={index} className="notification-item">
                    <h3>{notification.title}</h3>
                    <p>{notification.body}</p>
                  </div>
                ))
              ) : (
                <p>No notifications yet</p>
              )}
            </div>
          </div>
        )}
        <Link to="/add-av">
          <button type="button" className="add-button">
            <PlusCircle className="add-icon" />
            Add new Antivirus
          </button>
        </Link>
      </div>

      {/* Styles */}
      <style>{`
      .notification-modal-content {
        background: white;
        max-height: 500px;
        overflow-y: auto;
        padding: 20px;
        border-radius: 10px;
      }
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .header-left .role-dropdown {
          font-size: 16px;
          font-weight: 500;
        }

        .header-center {
          flex-grow: 1;
          display: flex;
          justify-content: center;
        }

        .search-bar {
          display: flex;
          align-items: center;
          background: #f1f3f5;
          border-radius: 20px;
          padding: 5px 10px;
          width: 300px;
          max-width: 100%;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          padding: 5px 10px;
          font-size: 14px;
        }

        .search-icon {
          width: 16px;
          height: 16px;
          color: gray;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon-button {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .icon-button:hover {
          background-color: #f1f3f5;
        }

        .add-button {
          display: flex;
          align-items: center;
          background-color: #4A2328;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          gap: 8px;
        }

        .add-icon {
          width: 18px;
          height: 18px;
        }

        .add-button:hover {
          background-color: #333;
        }

        .notification-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .notification-modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: red;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
};

export default Header;
