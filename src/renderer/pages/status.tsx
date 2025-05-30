import StatusBar from '../components/StatusComponents/StatusBar';
import BarGraph from '../components/StatusComponents/BarGraph';
import Statistics from '../components/StatusComponents/Statistics';
import RecentFileScanned from '../components/StatusComponents/RecentFileScanned';
import BarGraph2 from '../components/StatusComponents/BarGraph2';
import ListeningSection from '../components/StatusComponents/ListeningSection';

export default function Status() {
  return (
    <>
          <div style={{ display: "flex", gap:"10px" , justifyContent:'space-evenly'}}>
          <StatusBar />
          <ListeningSection/>
          </div>
          <div style={{ display: "flex", gap:"10px" , justifyContent:'space-evenly'}}>
            <RecentFileScanned/>
            <BarGraph/>
            <BarGraph2/>
          </div>
          <Statistics/>
      </>
  );
}