import './App.css';
import Introduction from './Components/Introduction/Introduction';
import DevPics from './Components/DevPics/DevPics';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import DevFocus from './Components/DevFocus/DevFocus';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Introduction />
      <DevPics />
      <About />
      <Background />
      <DevFocus />
      <Projects />
    </div>
  );
}

export default App;
