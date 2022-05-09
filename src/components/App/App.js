import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {

  const [globalState, setGlobalState] = useState({
    initLearnTime: 2,
    initBreakTime: 1,
    isLearnPhaseActive: true,
    isLearningBlockActive: false,
    isTimerRun: false,
  })
  const [remainLearnTime, setRemainLearnTime] = useState(globalState.initLearnTime);
  const [remainBreakTime, setRemainBreakTime] = useState(globalState.initBreakTime);

  return (
    <div className="app">

      <Clock 

        remainLearnTime={remainLearnTime}
        remainBreakTime={remainBreakTime}
        setRemainLearnTime={setRemainLearnTime}
        setRemainBreakTime={setRemainBreakTime}

        initBreakTime={globalState.initBreakTime}
        initLearnTime={globalState.initLearnTime}

        globalState={globalState}
        setGlobalState={setGlobalState}

        isLearnPhaseActive={globalState.isLearnPhaseActive}

        isTimerRun={globalState.isTimerRun}

      />

      <ControlPanel

        setRemainLearnTime={setRemainLearnTime}
        setRemainBreakTime={setRemainBreakTime}

        globalState={globalState}
        setGlobalState={setGlobalState}

        isTimerRun={globalState.isTimerRun}

        isLearningBlockActive={globalState.isLearningBlockActive}

      />

    </div>
  );
}

export default App;
