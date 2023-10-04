import './App.css';
import Introduction from './Components/Introduction/Introduction';
import DevPics from './Components/DevPics/DevPics';
import About from './Components/About/About';
import Background from './Components/Background/Background';

function App() {
  return (
    <div className='App'>
      <Introduction />
      <DevPics />
      <About />
      <Background />
    </div>
  );
}

export default App;
