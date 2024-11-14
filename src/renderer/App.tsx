import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Status from './components/StatusComponents/StatusOption';
import Quarantined from './components/QuarantinedComponents/QuarantinedOption';
import Antivirus from './components/AntivirusComponents/AntivirusOption';

export default function App() {
  return (
    <Router>
      <Status/>
      {/* <Quarantined/> */}
      {/* <Antivirus/> */}
    </Router>
  );
}