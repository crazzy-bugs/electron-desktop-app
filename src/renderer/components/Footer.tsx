import { FiHelpCircle, FiInfo } from 'react-icons/fi';

export default function Footer() {
    return (
        <div className="footer">
            <span>©2024 CII Shield Pro. All rights reserved.</span>
            <div className="footer-icons">
                <FiHelpCircle size={20} />
                <FiInfo size={20} />
            </div>
            <style>{`
              .footer {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #6B7280;
        }
        .footer-icons {
          display: flex;
          gap: 8px;
        }
            `}</style>
        </div>
    );
}