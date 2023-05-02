import ChatContainer from './components/chatContainer/chatContainer';
import OptionsPanel from './components/optionsPanel/optionsPanel';
import ConversationPanel from './components/conversationPanel/conversationPanel';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import { useState } from 'react';

function App() {
  
  const [current, setCurrent] = useState("home");

  function handleCurrent(newCurrent) {
    setCurrent(newCurrent);
  }

  return (
    <div className="App">
      <nav className='navbar'>
        <div className='logo-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <div className='logo-text-container'>
            <h1>
              <code>CSM Chatbot</code>
            </h1>
            <a
              className="App-link"
              href="https://github.com/Samuel1337/chatbot"
              target="_blank"
              rel="noopener noreferrer"
              >
              Github Repo
            </a>
          </div>
        </div>
      </nav>
      <header className="App-header">
          <OptionsPanel current={current} />
        {/* <div className='panels-container'>
          <ConversationPanel />
        </div> */}
      </header>
      <ChatContainer handleCurrent={handleCurrent} />
    </div>
  );
}

export default App; 
