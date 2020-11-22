import { Loader } from './app/components/Loader/Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <p>
          Loading components...
        </p>
      </header>
    </div>
  );
}

export default App;
