
import './App.css';
import Navigation from './Container/Navigation/Navigation';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
      </header>
      <Main/>
    </div>
  );
}

export default App;
