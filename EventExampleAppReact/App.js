import './App.css';
import EventExamples from './Components/EventExamples';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>Event Examples Application</h1>

      <EventExamples />

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;