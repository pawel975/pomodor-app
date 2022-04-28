import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Clock/>
      <ControlPanel/>
    </div>
  );
}

export default App;
