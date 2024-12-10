import React from 'react';
import './Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
  
const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
      <div
        className={`modal-content ${show ? 'modal-enter' : 'modal-exit'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
