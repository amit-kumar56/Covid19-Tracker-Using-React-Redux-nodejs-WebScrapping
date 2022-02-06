import './App.css';
import Tracker from './components/Tracker';
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">

      <HeaderComponent />
      <Slider />
      <Tracker />

    </div>
  );
}

export default App;
