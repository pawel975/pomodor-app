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
    initLongBreakTime: 900,
    maxSession: 4,
    maxBlock: 2,
    currentBlock: 1,
    currentSession: 1,
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
        return (
          <UserSettings
            globalState={globalState}
            setGlobalState={setGlobalState}
            setIsModalOpen={setIsModalOpen}
            setRemainLearnTime={setRemainLearnTime}
            setRemainBreakTime={setRemainBreakTime}
          />
        )
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
        globalState={globalState}
        setGlobalState={setGlobalState}
      />

      <ControlPanel
        remainBreakTime={remainBreakTime}
        setRemainLearnTime={setRemainLearnTime}
        setRemainBreakTime={setRemainBreakTime}
        globalState={globalState}
        setGlobalState={setGlobalState}
      />

    </div>
  );
}

export default App;
