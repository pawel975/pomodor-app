import { useState } from 'react';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import './App.scss';

const App = () => {

  const [learningSetup, setLearningSetup] = useState({
    learningTime: 1500,
    breakTime: 300,
    isLearningSessionActive: true,
  })

  const [learn, setLearn] = useState(learningSetup.learningTime);
  const [breakk, setBreakk] = useState(learningSetup.breakTime);

  const [isTimerRun, setIsTimerRun] = useState(false);
  const [isLearningBlockActive, setIsLearningBlockActive] = useState(false);

  return (
    <div className="app">
      <Clock 

        learn={learn}
        breakk={breakk}
        setLearn={setLearn}
        setBreakk={setBreakk}

        learningTime={learningSetup.learningTime} 
        breakTime={learningSetup.breakTime}
        setLearningSetup={setLearningSetup}
        isLearningSessionActive={learningSetup.isLearningSessionActive}
        isTimerRun={isTimerRun}
      />
      <ControlPanel

        setLearn={setLearn}
        setBreakk={setBreakk}
        
        learningSetup={learningSetup}
        setLearningSetup={setLearningSetup}
        isTimerRun={isTimerRun}
        setIsTimerRun={setIsTimerRun}
        isLearningBlockActive={isLearningBlockActive}
        setIsLearningBlockActive={setIsLearningBlockActive}
      />
    </div>
  );
}

export default App;
