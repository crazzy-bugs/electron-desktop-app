import StatusBar from '../components/StatusComponents/StatusBar';
import BarGraph from '../components/StatusComponents/BarGraph';
import Statistics from '../components/StatusComponents/Statistics';
import RecentFileScanned from '../components/StatusComponents/RecentFileScanned';
import BarGraph2 from '../components/StatusComponents/BarGraph2';

export default function Status() {
  return (
    <>
          <StatusBar />
          <div style={{ display: "flex", gap:"10px" }}>
            <RecentFileScanned/>
            <BarGraph/>
            <BarGraph2/>
          </div>
          <Statistics/>
      </>
  );
}