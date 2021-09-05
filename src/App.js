import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import AppCover from './components/app-cover/app-cover'
import WelcomeSection from './components/welcome-section/welcome-section'
import JoiningSection from './components/joining-section/joining-section'
import { useCallback, useState } from 'react'
import TimeCounter from './components/time-counter/time-counter'
import RoadmapSection from './components/roadmap-section/roadmap-section'
// import TeamSection from './components/team-section/team-section'

function App() {
  const [mode, setMode] = useState('');

  const changeMode = useCallback(() => setMode( mode ? '' : 'dark-mode'), [mode]);

  return (
    <div className={mode}>
      <Header changeMode={changeMode} mode={mode} />
      <AppCover />
      <TimeCounter />
      <WelcomeSection />
      <JoiningSection />
      <RoadmapSection />
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
}

export default App;
