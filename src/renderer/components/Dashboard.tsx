// import React from 'react';
// import { Shield, Lock, BarChart2, Zap, MoreHorizontal, HelpCircle, Check, Bell, Minus, X, Info, ChevronDown } from 'lucide-react';

// export default function QuickHealInterface() {
//   return (
//     <div className="quick-heal-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="logo">
//           <span>Q</span>
//         </div>
//         {[
//           { icon: Shield, text: 'STATUS', active: true },
//           { icon: Lock, text: 'PROTECTION' },
//           { icon: Lock, text: 'PRIVACY' },
//           { icon: BarChart2, text: 'PERFORMANCE' },
//           { icon: Zap, text: 'metaProtect' },
//           { icon: MoreHorizontal, text: 'MORE' },
//         ].map(({ icon: Icon, text, active }, index) => (
//           <div key={index} className={`sidebar-item ${active ? 'active' : ''}`}>
//             <Icon size={24} />
//             <span>{text}</span>
//           </div>
//         ))}
//         <div className="help-icon">
//           <HelpCircle size={24} />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h1>Quick Heal AntiVirus Pro</h1>
//           <div className="header-controls">
//             <span>License - 252 Days Left</span>
//             <Bell size={20} />
//             <Minus size={20} />
//             <X size={20} />
//           </div>
//         </div>

//         {/* Status Bar */}
//         <div className="status-bar">
//           <div className="status-info">
//             <div className="status-icon">
//               <Check size={24} color="white" />
//             </div>
//             <div>
//               <span className="status-excellent">Excellent!</span>
//               <p>You have the latest updates.</p>
//             </div>
//           </div>
//           <button className="quick-scan-btn">Quick Scan</button>
//         </div>

//         {/* Main Grid */}
//         <div className="main-grid">
//           {/* Left Column */}
//           <div className="left-column">
//             <div className="summary-header">
//               <span className="summary-active">Summary</span>
//               <span>Reports</span>
//             </div>
//             <div className="score-container">
//               {/* Security Score */}
//               <div className="score-chart">
//                 <svg viewBox="0 0 100 100">
//                   <circle cx="50" cy="50" r="45" fill="none" stroke="#E6E6E6" strokeWidth="10" />
//                   <circle cx="50" cy="50" r="45" fill="none" stroke="#3B82F6" strokeWidth="10" strokeDasharray="283" strokeDashoffset="70" />
//                   <text x="50" y="50" textAnchor="middle" dy=".3em" className="score-value">750</text>
//                   <text x="50" y="65" textAnchor="middle" className="score-total">1000</text>
//                 </svg>
//                 <div className="score-label good">
//                   <Check size={16} />
//                   GOOD
//                 </div>
//               </div>
//               {/* Privacy Score */}
//               <div className="score-chart">
//                 <svg viewBox="0 0 100 100">
//                   <circle cx="50" cy="50" r="45" fill="none" stroke="#E6E6E6" strokeWidth="10" />
//                   <circle cx="50" cy="50" r="45" fill="none" stroke="#EF4444" strokeWidth="10" strokeDasharray="283" strokeDashoffset="220" />
//                   <text x="50" y="50" textAnchor="middle" dy=".3em" className="score-value">200</text>
//                   <text x="50" y="65" textAnchor="middle" className="score-total">1000</text>
//                 </svg>
//                 <div className="score-label low">
//                   LOW
//                 </div>
//               </div>
//             </div>
//             <div className="recommended-measures">
//               <div>
//                 <span>Recommended Measures</span>
//                 <span className="measure-count">2</span>
//               </div>
//               <ChevronDown size={20} />
//             </div>
//             <div className="quick-heal-stats">
//               <h3>Quick Heal has saved you so far :</h3>
//               <div className="stats-grid">
//                 <div className="stat-item">
//                   <div className="stat-value">911</div>
//                   <div className="stat-label">Total Threats Blocked</div>
//                 </div>
//                 <div className="stat-item">
//                   <div className="stat-value">0</div>
//                   <div className="stat-label">Hacking Attempts Blocked</div>
//                 </div>
//                 <div className="stat-item">
//                   <div className="stat-value">-</div>
//                   <div className="stat-label">Phishing Attempts Blocked</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right Column */}
//           <div className="right-column">
//             <div className="subscription-card">
//               <p className="last-scan">Last scan : Scan not yet performed</p>
//               <img src="/placeholder.svg?height=150&width=300" alt="Family using computer" />
//               <p className="subscription-text">Activate Auto Subscription and</p>
//               <p className="subscription-offer">GET 35% OFF</p>
//             </div>
//             <div className="cyber-protection-card">
//               <p>A Cyber Protection That's Always On is a Great Idea!</p>
//               <div className="card-footer">
//                 <span>•••</span>
//                 <ChevronDown size={20} />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Footer */}
//         <div className="footer">
//           <span>© 1994-2023 Quick Heal Technologies Ltd. All rights reserved.</span>
//           <div className="footer-icons">
//             <HelpCircle size={20} />
//             <Info size={20} />
//           </div>
//         </div>
//       </div>
//       <style >{`
//         .quick-heal-container {
//           display: flex;
//           height: 100vh;
//           background-color: #f3f4f6;
//         }
//         .sidebar {
//           width: 80px;
//           background-color: #8B0000;
//           color: white;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 16px 0;
//         }
//         .logo {
//           width: 48px;
//           height: 48px;
//           background-color: white;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           border-radius: 4px;
//           margin-bottom: 24px;
//         }
//         .logo span {
//           color: #8B0000;
//           font-size: 24px;
//           font-weight: bold;
//         }
//         .sidebar-item {
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin-bottom: 16px;
//           padding: 8px 0;
//         }
//         .sidebar-item.active {
//           background-color: #A52A2A;
//         }
//         .sidebar-item span {
//           font-size: 12px;
//           margin-top: 4px;
//         }
//         .help-icon {
//           margin-top: auto;
//         }
//         .main-content {
//           flex: 1;
//           padding: 16px;
//         }
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 16px;
//         }
//         .header h1 {
//           font-size: 24px;
//           font-weight: bold;
//         }
//         .header-controls {
//           display: flex;
//           align-items: center;
//         }
//         .header-controls > * {
//           margin-left: 16px;
//         }
//         .status-bar {
//           background-color: white;
//           padding: 16px;
//           border-radius: 8px;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 16px;
//         }
//         .status-info {
//           display: flex;
//           align-items: center;
//         }
//         .status-icon {
//           width: 48px;
//           height: 48px;
//           background-color: #10B981;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-right: 16px;
//         }
//         .status-excellent {
//           color: #10B981;
//           font-size: 20px;
//           font-weight: bold;
//         }
//         .quick-scan-btn {
//           background-color: #4A2328;
//           color: white;
//           padding: 8px 16px;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }
//         .main-grid {
//           display: grid;
//           grid-template-columns: 2fr 1fr;
//           gap: 16px;
//         }
//         .left-column, .right-column > div {
//           background-color: white;
//           border-radius: 8px;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//           padding: 16px;
//         }
//         .summary-header {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 16px;
//         }
//         .summary-active {
//           color: #DC2626;
//           font-weight: bold;
//           text-decoration: underline;
//         }
//         .score-container {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 16px;
//         }
//         .score-chart {
//           width: 192px;
//           height: 192px;
//           position: relative;
//         }
//         .score-value {
//           font-size: 24px;
//           font-weight: bold;
//         }
//         .score-total {
//           font-size: 12px;
//         }
//         .score-label {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           padding: 4px 8px;
//           border-radius: 4px;
//           display: flex;
//           align-items: center;
//         }
//         .score-label.good {
//           background-color: #3B82F6;
//           color: white;
//         }
//         .score-label.low {
//           background-color: #EF4444;
//           color: white;
//         }
//         .recommended-measures {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 16px;
//         }
//         .measure-count {
//           background-color: #F59E0B;
//           color: white;
//           border-radius: 50%;
//           padding: 2px 6px;
//           margin-left: 8px;
//         }
//         .quick-heal-stats {
//           border-top: 1px solid #E5E7EB;
//           padding-top: 16px;
//         }
//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 16px;
//           margin-top: 16px;
//         }
//         .stat-item {
//           border: 1px solid #E5E7EB;
//           padding: 8px;
//           border-radius: 4px;
//         }
//         .stat-value {
//           font-size: 24px;
//           font-weight: bold;
//         }
//         .stat-label {
//           font-size: 14px;
//           color: #6B7280;
//         }
//         .right-column {
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//         }
//         .subscription-card img {
//           width: 100%;
//           height: auto;
//           margin: 8px 0;
//         }
//         .last-scan {
//           font-size: 14px;
//           color: #6B7280;
//           margin-bottom: 8px;
//         }
//         .subscription-text {
//           font-weight: bold;
//         }
//         .subscription-offer {
//           color: #3B82F6;
//           font-weight: bold;
//         }
//         .cyber-protection-card {
//           background-color: #E5E7EB;
//         }
//         .card-footer {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 8px;
//         }
//         .footer {
//           margin-top: 16px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 14px;
//           color: #6B7280;
//         }
//         .footer-icons {
//           display: flex;
//           gap: 8px;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState } from 'react'
import { Shield, Activity, Zap, Settings, Bell, Search, Menu } from 'lucide-react'
import './Dashboard.css'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">SecureShield</div>
        <nav>
          <ul>
            <li><a href="#" className="active"><Shield /> Protection</a></li>
            <li><a href="#"><Activity /> Performance</a></li>
            <li><a href="#"><Zap /> Scan</a></li>
            <li><a href="#"><Settings /> Settings</a></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu />
          </button>
          <div className="search-bar">
            <Search />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-menu">
            <Bell />
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="avatar" />
          </div>
        </header>

        <div className="dashboard-content">
          <h1>Protection Dashboard</h1>

          <div className="status-overview">
            <div className="status-card good">
              <h2>System Status</h2>
              <p>Your system is protected</p>
              <Shield className="icon" />
            </div>
            <div className="status-card warning">
              <h2>Last Scan</h2>
              <p>3 days ago</p>
              <Activity className="icon" />
            </div>
            <div className="status-card info">
              <h2>Updates</h2>
              <p>Database is up to date</p>
              <Zap className="icon" />
            </div>
          </div>

          <div className="threat-stats">
            <h2>Threat Statistics</h2>
            <div className="stat-grid">
              <div className="stat-item">
                <h3>Malware Blocked</h3>
                <p>247</p>
              </div>
              <div className="stat-item">
                <h3>Phishing Attempts</h3>
                <p>18</p>
              </div>
              <div className="stat-item">
                <h3>Suspicious URLs</h3>
                <p>53</p>
              </div>
              <div className="stat-item">
                <h3>PUAs Detected</h3>
                <p>12</p>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn"><Zap /> Quick Scan</button>
              <button className="action-btn"><Shield /> Update Database</button>
              <button className="action-btn"><Activity /> Performance Check</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

