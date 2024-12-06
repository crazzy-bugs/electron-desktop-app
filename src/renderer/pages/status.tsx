import StatusBar from '../components/StatusComponents/StatusBar';
import BarGraph from '../components/StatusComponents/BarGraph';
import Statistics from '../components/StatusComponents/Statistics';
import RecentFileScanned from '../components/StatusComponents/RecentFileScanned';
import BarGraph2 from '../components/StatusComponents/BarGraph2';

export default function Status() {
  return (
    <>
      <StatusBar />
      <div style={{ display: 'flex', gap: '10px' }}>
        <RecentFileScanned />
        <BarGraph />
        <span className="hide-on-medium">
          <BarGraph2 />
        </span>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .hide-on-medium {
        display: none;
          }
        }
      `}</style>
      <Statistics />
    </>
  );
}
