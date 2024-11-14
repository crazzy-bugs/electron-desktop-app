import Sidebar from './Sidebar';
import Header from './Header';
import StatusBar from './StatusBar';
import BarGraph from './BarGraph';
import Statistics from './Statistics';

export default function Status() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <StatusBar />
          <div>
            <BarGraph/>
          </div>
          <Statistics/>
        </div>
      </div>
      <style>{`
        .app-container {
          display: flex;
          height: 100vh;
          font-family: 'Montserrat', sans-serif;
        }
        .main-content {
          flex: 1;
          padding: 20px;
          background-color: #f0f0f0;
        }
      `}</style>
      </>
  );
}