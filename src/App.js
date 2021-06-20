import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos, acá tienes de todo lo que necesitas!!!</h1>
        <a
          className="App-link"
          href="http://www.locompras.cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          LoCompras !!
        </a>
      </header>
    </div>
  );
}

export default App;
