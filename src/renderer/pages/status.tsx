import StatusBar from '../components/StatusComponents/StatusBar';
import BarGraph from '../components/StatusComponents/BarGraph';
import Statistics from '../components/StatusComponents/Statistics';
import RecentFileScanned from '../components/StatusComponents/RecentFileScanned';

export default function Status() {
  return (
    <>
          <StatusBar />
          <div>
            <RecentFileScanned/>
            <BarGraph/>
          </div>
          <Statistics/>
      </>
  );
}