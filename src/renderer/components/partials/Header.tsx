import React, { useState } from 'react';
import Modal from './Modal';
import { Search, Bell, User, PlusCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header-bar">
      {/* Left Section */}
      {/* Updated at 2021-10-06 15:00:00 */}
      {/* Center Section */}
      <div className="header-center"></div>

      {/* Right Section */}
      <div className="header-right">
        <button className="icon-button">
          <Bell />
        </button>
        <button className="add-button">
          <PlusCircle className="add-icon" />
          Add new Antivirus
        </button>
        <div>
          <button onClick={toggleModal}>Open Modal</button>
          <Modal show={isModalOpen} onClose={toggleModal}>
            <h2>Modal Title</h2>
            <p>This is the modal content!</p>
          </Modal>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          // padding: 10px 20px;
          // background-color: white;
          // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
      `}</style>
    </header>
  );
};

export default Header;
