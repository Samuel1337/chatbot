import logo from './logo.svg';
import './App.css';
import './reset.css';
import ChatContainer from './components/chatContainer/chatContainer';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Look</code> {"that way -->"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <ChatContainer />
      </header>
    </div>
  );
}

export default App; 
