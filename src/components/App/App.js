import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import './App.scss';
import UserSettings from '../UserSettings/UserSettings';
import UserStatistics from '../UserStatistics/UserStatistics';
import { getFromLocalStorage, getLastWeek, saveToLocalStorage } from '../../helpers';
import RulesInfoSection from '../RulesInfoSection/RulesInfoSection';
import AppearanceSection from '../AppearanceSection/AppearanceSection';

export const initGlobalState = {
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
}

const App = () => {

  const lastWeekDates = getLastWeek();

  // Check if local storage is empty to create record structure, and to update structure if it's not.
  if (!getFromLocalStorage("statistics")) {
      const lastWeekRecords = [];

      lastWeekDates.forEach(dayDate => {
          lastWeekRecords.push({
              date: dayDate,
              minutesLearned: 0
          })
      })

      saveToLocalStorage("statistics", lastWeekRecords);
  } else {

      const lastWeekRecords = getFromLocalStorage("statistics");
      const filteredRecords = [];

      lastWeekDates.forEach(day => {

          const matchedRecordDay = lastWeekRecords.filter(record => record.date === day)

          if (matchedRecordDay[0]) {
              filteredRecords.push(matchedRecordDay[0])
          } else {
              filteredRecords.push({date: day, minutesLearned: 0})
          }
      })

      saveToLocalStorage("statistics", filteredRecords);
  }
  
  const [globalState, setGlobalState] = useState(
    getFromLocalStorage("globalState") ? 
    getFromLocalStorage('globalState') :
    initGlobalState
  )

  const [statistics, setStatistics] = useState(getFromLocalStorage("statistics"));

  const [remainLearnTime, setRemainLearnTime] = useState(
    getFromLocalStorage("remainLearnTime") ?
    getFromLocalStorage("remainLearnTime") :
    globalState.initLearnTime
  );

  const [remainBreakTime, setRemainBreakTime] = useState(
    getFromLocalStorage("remainBreakTime") ?
    getFromLocalStorage("remainBreakTime") :
    globalState.initBreakTime
  );

  const [activeModalContentBtnId, setActiveModalContentBtnId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  saveToLocalStorage("remainLearnTime", remainLearnTime);
  saveToLocalStorage("remainBreakTime", remainBreakTime);

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
      case "rules-info-nav-btn":
        return <RulesInfoSection/>
      case "appearance-section-nav-btn":
        return <AppearanceSection/>
      default:
        break
    }
  }

  return (
    <div className="app" data-testid="app">

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
        statistics={statistics}
        setStatistics={setStatistics}
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
