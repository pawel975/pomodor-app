import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {

  const [globalState, setGlobalState] = useState({
    initLearnTime: 1500,
    initBreakTime: 300,
    isLearningSessionActive: true,
  })

  const [learnTime, setLearnTime] = useState(globalState.initLearnTime);
  const [breakTime, setBreakTime] = useState(globalState.initBreakTime);

  const [isTimerRun, setIsTimerRun] = useState(false);
  const [isLearningBlockActive, setIsLearningBlockActive] = useState(false);

  return (
    <div className="app">
      
      <Clock 

        learnTime={learnTime}
        breakTime={breakTime}
        setLearnTime={setLearnTime}
        setBreakTime={setBreakTime}

        initLearnTime={globalState.initLearnTime} 
        initBreakTime={globalState.initBreakTime}

        setGlobalState={setGlobalState}

        isLearningSessionActive={globalState.isLearningSessionActive}

        isTimerRun={isTimerRun}

      />

      <ControlPanel

        setLearnTime={setLearnTime}
        setBreakTime={setBreakTime}
        
        globalState={globalState}
        setGlobalState={setGlobalState}

        isTimerRun={isTimerRun}
        setIsTimerRun={setIsTimerRun}

        isLearningBlockActive={isLearningBlockActive}
        setIsLearningBlockActive={setIsLearningBlockActive}

      />

    </div>
  );
}

export default App;
