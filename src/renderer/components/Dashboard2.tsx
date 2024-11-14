import React, { useState } from 'react'
import { Shield, Activity, Zap, Settings, Bell, Search, Menu, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react'
import './Dashboard2.css'
export default function Dashboard2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="dashboard">
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">TriGuard Antivirus</div>
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
          <button className="menu-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
            <Menu />
          </button>
          <div className="search-bar">
            <Search />
            <input type="text" placeholder="Search..." aria-label="Search" />
          </div>
          <div className="user-menu">
            <button className="notification-btn" aria-label="Notifications">
              <Bell />
            </button>
            <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="avatar" />
          </div>
        </header>

        <div className="dashboard-content">
          <h1>Multi-Engine Protection Dashboard</h1>

          <div className="status-overview">
            <div className="status-card good">
              <h2>System Status</h2>
              <p>Protected by 3 engines</p>
              <Shield className="icon" />
            </div>
            <div className="status-card info">
              <h2>Last Full Scan</h2>
              <p>2 days ago</p>
              <Activity className="icon" />
            </div>
            <div className="status-card warning">
              <h2>Threats Detected</h2>
              <p>3 potential threats</p>
              <AlertTriangle className="icon" />
            </div>
          </div>

          <div className="engine-status">
            <h2>Engine Status</h2>
            <div className="engine-grid">
              <div className="engine-card">
                <img src="/placeholder.svg?height=40&width=40" alt="Windows Defender logo" className="engine-logo" />
                <h3>Windows Defender</h3>
                <p className="status"><CheckCircle className="icon-small" /> Active</p>
                <p>Last updated: 2 hours ago</p>
              </div>
              <div className="engine-card">
                <img src="/placeholder.svg?height=40&width=40" alt="ESET logo" className="engine-logo" />
                <h3>ESET</h3>
                <p className="status"><CheckCircle className="icon-small" /> Active</p>
                <p>Last updated: 1 hour ago</p>
              </div>
              <div className="engine-card">
                <img src="/placeholder.svg?height=40&width=40" alt="Trend Micro logo" className="engine-logo" />
                <h3>Trend Micro</h3>
                <p className="status"><CheckCircle className="icon-small" /> Active</p>
                <p>Last updated: 30 minutes ago</p>
              </div>
            </div>
          </div>

          <div className="threat-stats">
            <h2>Threat Statistics</h2>
            <div className="stat-grid">
              <div className="stat-item">
                <h3>Malware Blocked</h3>
                <p>127</p>
              </div>
              <div className="stat-item">
                <h3>Phishing Attempts</h3>
                <p>43</p>
              </div>
              <div className="stat-item">
                <h3>Suspicious URLs</h3>
                <p>89</p>
              </div>
              <div className="stat-item">
                <h3>PUAs Detected</h3>
                <p>15</p>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="action-btn primary"><Zap /> Quick Scan</button>
              <button className="action-btn secondary"><RefreshCw /> Update All Engines</button>
              <button className="action-btn secondary"><Shield /> View Quarantine</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}