import logo from './logo.svg';
import './App.css';
import EleveListe from './eleve/EleveListe';
import eleves from './eleve/eleves';

function App() {
  return (
    <div className="App">
      <EleveListe eleves={eleves} />
    </div>
  );
}

export default App;
