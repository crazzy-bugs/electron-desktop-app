import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, []);

  const handleFullScanClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/test');
    }, 1000);
  };

  return (
    <div className="status-bar">
      <div className="status-info">
        <div className="status-icon">
          <Check size={24} color="white" />
        </div>
        <div>
          <span className="status-excellent">Excellent!</span>
          <p>You have the latest updates.</p>
        </div>
      </div>
      <button ref={buttonRef} className="quick-scan-btn" onClick={handleFullScanClick}>
        Full Scan
      </button>

      {isAnimating && (
        <div
          className="circle-overlay"
          style={{
            top: buttonPosition.top,
            left: buttonPosition.left,
          }}
        ></div>
      )}

      <style>{`
        .status-bar {
          background-color: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
        }
        .status-info {
          display: flex;
          align-items: center;
        }
        .status-icon {
          width: 48px;
          height: 48px;
          background-color: #10B981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
        }
        .status-excellent {
          color: #10B981;
          font-size: 20px;
          font-weight: bold;
        }
        .quick-scan-btn {
          background-color: #4A2328;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        .circle-overlay {
          position: fixed;
          width: 20px;
          height: 20px;
          background-color: rgba(74, 35, 40);
          opacity: .8;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: expandCircle .6s ease-in-out forwards;
          z-index: 1000;
        }
        @keyframes expandCircle {
          0% {
            width: 20px;
            height: 20px;
            opacity: .8;
          }
          100% {
            width: 3000px;
            height: 3000px;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StatusBar;
