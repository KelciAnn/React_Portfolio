import './App.css';
import Introduction from './Components/Introduction/Introduction';
import DevPics from './Components/DevPics/DevPics';
import About from './Components/About/About';
import Background from './Components/Background/Background';
import DevFocus from './Components/DevFocus/DevFocus';

function App() {
  return (
    <div className='App'>
      <Introduction />
      <DevPics />
      <About />
      <Background />
      <DevFocus />
    </div>
  );
}

export default App;
