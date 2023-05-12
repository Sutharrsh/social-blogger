import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [botMessage, setBotMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send userMessage to the backend
    axios.post('http://localhost:5000/', { userMessage }).then((response) => {
      
    setBotMessage(response.data);
    console.log(response.data);
      setChatHistory([...chatHistory, { userMessage, botMessage: response.data}]);
    });

    setUserMessage('');
  };

  return (
    <div className='App'>
      <div className='chat-window'>
        {chatHistory.map((chat, index) => (
          <p key={index}>
            
            <span>You:{chat.userMessage}</span> 
             <span>Bot:{chat.botMessage}</span>
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userMessage} onChange={handleChange} />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
