import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// pages
import Status from './pages/status';
import Quarantined from './pages/quarantined';
import Antivirus from './pages/antivirus';
import Support from './pages/support';

// components
import Sidebar from './components/partials/Sidebar';
import Header from './components/partials/Header';

import Test from './pages/test';
import FullSystemScan from './pages/fullsystemscan';
import ChatBot from './components/partials/ChatBot';
import Settings from './components/SettingComponents/Setting';
import Statictics from './components/StaticticsComponents/Statistics';
// @ts-ignore
import RecentFiles from './components/StaticticsComponents/RecentFiles';
import AddAntivirus from './pages/addAntivirus';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Status />} />
            <Route path="/quarantined" element={<Quarantined />} />
            <Route path="/antivirus" element={<Antivirus />} />
            <Route path="/support" element={<Support />} />
            <Route path="/test" element={<Test />} />
            <Route path="/startscan" element={<FullSystemScan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<RecentFiles />} />
            {/* Route for file details in Statistics */}
            <Route path="/statistics/:fileId" element={<Statictics />} />
            <Route path="/add-av" element={<AddAntivirus />} />
          </Routes>

          <ChatBot />
        </div>
      </div>
    </Router>
  );
}
