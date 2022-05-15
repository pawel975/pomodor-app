import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import './App.scss';
import UserSettings from '../UserSettings/UserSettings';
import UserStatistics from '../UserStatistics/UserStatistics';

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
  const [activeModalContentBtnId, setActiveModalContentBtnId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getModalContent = (activeModalContentBtnId) => {
    switch(activeModalContentBtnId) {
      case "settings-nav-btn":
        return <UserSettings/>
      case "statistics-nav-btn":
        return <UserStatistics/>
      default:
        break
    }
  }

  return (
    <div className="app">

      <Nav 
        setIsModalOpen={setIsModalOpen}
        setActiveModalContentBtnId={setActiveModalContentBtnId}
      />

      {isModalOpen && 
        <Modal 
          content={getModalContent(activeModalContentBtnId)}
          setIsModalOpen={setIsModalOpen}
          activeModalContentBtnId={activeModalContentBtnId}
          setActiveModalContentBtnId={setActiveModalContentBtnId}
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
