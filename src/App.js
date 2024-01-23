import Navbar from './components/Navbar/Navbar';
import './App.css';
import Weather from './components/weatherApp/Weather';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;