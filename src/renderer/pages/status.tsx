import StatusBar from '../components/StatusComponents/StatusBar';
import BarGraph from '../components/StatusComponents/BarGraph';
import Statistics from '../components/StatusComponents/Statistics';

export default function Status() {
  return (
    <>
          <StatusBar />
          <div>
            <BarGraph/>
          </div>
          <Statistics/>
      </>
  );
}