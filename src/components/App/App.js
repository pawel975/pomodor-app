import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {

  const [time, setTime] = useState(1500)
  const [isTimerRun, setIsTimerRun] = useState(false);
  const [isLearningBlockActive, setIsLearningBlockActive] = useState(false);

  return (
    <div className="app">
      <Clock 
        time={time} 
        setTime={setTime}
        isTimerRun={isTimerRun}
      />
      <ControlPanel
        isTimerRun={isTimerRun}
        setIsTimerRun={setIsTimerRun}
        isLearningBlockActive={isLearningBlockActive}
        setIsLearningBlockActive={setIsLearningBlockActive}
      />
    </div>
  );
}

export default App;
