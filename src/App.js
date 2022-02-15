import AddParty from './Components/AddParty';
import Events from './Components/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Party Planning  </h1>
      <div>
        <div>
          <AddParty />
        </div>
        <Events />
      </div>
    </div>
  );
}

export default App;
