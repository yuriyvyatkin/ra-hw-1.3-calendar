import './App.css';
import Calendar from './components/Calendar'

const now = new Date(2021, 11, 24);

function App() {
  return (
    <Calendar date={now} />
  );
}

export default App;
