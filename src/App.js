import './App.css'
import Header from './components/header/header'
import AppCover from './components/app-cover/app-cover'
import WelcomeSection from './components/welcome-section/welcome-section'
import JoiningSection from './components/joining-section/joining-section'

function App() {
  return (
    <div>
      <Header />
      <AppCover />
      <WelcomeSection />
      <JoiningSection />
    </div>
  );
}

export default App;
