import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          olá <code>src/App.js</code> e sdo haha.
        </p>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          vamos para o github
        </a>
      </header>
    </div>
  );
}

export default App;
