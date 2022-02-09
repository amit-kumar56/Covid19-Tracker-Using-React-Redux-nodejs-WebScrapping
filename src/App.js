import './App.css';
import TrackerContainers from './containers/TrackerContainers';
//import StateContainers from './containers/stateContainer';

import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent';
import Slider from './components/Slider';
import StateContainer from './containers/StateContainer';

function App() {
  return (
    <div className="App">

      <HeaderComponent />
      <Slider />
      <TrackerContainers />
      <StateContainer/>
    </div>
  );
}

export default App;
