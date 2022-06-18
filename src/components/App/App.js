import { useEffect, useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import Nav from '../Nav/Nav';
import Modal from '../Modal/Modal';
import './App.scss';
import SettingsSection from '../SettingsSection/SettingsSection';
import { saveToLocalStorage } from '../../helpers';
import RulesInfoSection from '../RulesInfoSection/RulesInfoSection';
import AppearanceSection from '../AppearanceSection/AppearanceSection';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import { useSelector } from 'react-redux';

const App = () => {

  const globalStateReducer = useSelector(state => state.globalState);
  const remainLearnTimeReducer = useSelector(state => state.remainLearnTime)
  const remainBreakTimeReducer = useSelector(state => state.remainBreakTime);
  
  const [activeModalContentBtnId, setActiveModalContentBtnId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  saveToLocalStorage("remainLearnTime", remainLearnTimeReducer);
  saveToLocalStorage("remainBreakTime", remainBreakTimeReducer);

  const getModalContent = (activeModalContentBtnId) => {
    switch(activeModalContentBtnId) {
      case "settings-nav-btn":
        return (
          <SettingsSection
            setIsModalOpen={setIsModalOpen}
          />
        )
      case "statistics-nav-btn":
        return <StatisticsSection/>
      case "rules-info-nav-btn":
        return <RulesInfoSection/>
      case "appearance-section-nav-btn":
        return <AppearanceSection/>
      default:
        break
    }
  }

  useEffect(() => {

    const activeThemeId = globalStateReducer.themeId
    // Assign particular filter on whole app to generate theme based on theme id
    switch(activeThemeId) {
      case "synthwave-85":
          document.documentElement.style.filter = "";
          break
      case "infinite-ocean":
          document.documentElement.style.filter = "hue-rotate(300deg)";
          break
      case "wild-desert":
          document.documentElement.style.filter = "hue-rotate(70deg)";
          break
      default:
          break
  }
  },[globalStateReducer.themeId])

  useEffect(() => {

    const activeFontId = globalStateReducer.fontId
    // Assign particular filter on whole app to generate theme based on theme id
    switch(activeFontId) {
      case "concert-one":
          document.documentElement.style.setProperty("--ff-app", "'Concert One', cursive");
          break
      case "arvo":
          document.documentElement.style.setProperty("--ff-app", "'Arvo', serif");
          break
      case "chakra-petch":
          document.documentElement.style.setProperty("--ff-app", "'Chakra Petch', sans-serif");
          break
      default:
          break
  }
  },[globalStateReducer.fontId])

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
      
      <Clock />
      <ControlPanel />

    </div>
  );
}

export default App;
