import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import './App.scss';
import UserSettings from '../UserSettings/UserSettings';

const App = () => {

  const [globalState, setGlobalState] = useState({
    initLearnTime: 1500,
    initBreakTime: 300,
    isLearnPhaseActive: true,
    isLearningBlockActive: false,
    isTimerRun: false,
  })
  const [remainLearnTime, setRemainLearnTime] = useState(globalState.initLearnTime);
  const [remainBreakTime, setRemainBreakTime] = useState(globalState.initBreakTime);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">

      <Nav 
        setIsModalOpen={setIsModalOpen}
      />

      {isModalOpen && 
        <Modal 
          content={<UserSettings/>}
          setIsModalOpen={setIsModalOpen}
        />
      }

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
