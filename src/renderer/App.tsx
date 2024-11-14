import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import './App.css';
import Statistics from './components/Statistics';
import Dashboard2 from './components/Dashboard2';
import EngineStatus from './components/EngineStatus';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        {/* <Dashboard2/> */}
        <div className="main-content">
          <Header />
          <StatusBar />
          {/* <EngineStatus/> */}
          <Statistics/>
          {/* Add more components for the main content area here */}
        </div>
      </div>
      <Footer />

      <style>{`
        .app-container {
          display: flex;
          height: 100vh;
          font-family: 'Montserrat', sans-serif;
          // flex-direction: column;
        }
        .main-content {
          flex: 1;
          padding: 20px;
          background-color: #f0f0f0;
        }
      `}</style>
    </Router>
  );
}