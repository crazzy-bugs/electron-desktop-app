import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Status from './components/StatusComponents/StatusOption';

export default function App() {
  return (
    <Router>
      <Status/>
    </Router>
  );
}