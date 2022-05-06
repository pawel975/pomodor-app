import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {

  const [globalState, setGlobalState] = useState({
    initLearnTime: 1500,
    initBreakTime: 300,
    isLearningSessionActive: true,
    isLearningBlockActive: false,
    isTimerRun: false,
  })

  const [learnTime, setLearnTime] = useState(globalState.initLearnTime);
  const [breakTime, setBreakTime] = useState(globalState.initBreakTime);

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

        isTimerRun={globalState.isTimerRun}

      />

      <ControlPanel

        setLearnTime={setLearnTime}
        setBreakTime={setBreakTime}
        
        globalState={globalState}
        setGlobalState={setGlobalState}

        isTimerRun={globalState.isTimerRun}

        isLearningBlockActive={globalState.isLearningBlockActive}

      />

    </div>
  );
}

export default App;
