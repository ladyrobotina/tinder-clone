import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Elon Musk",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
            message: "Hi!"
            
        },
        {
            name: "Elon Musk",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
            message: "How you doing?"
              
        },
        {
            message: "Hi! Nice to meet you?"  
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }
    
    return (
        <div className="chatScreen">
          <p className="chatScreen__timestap">YOU MATCHED WITH ELON MUSK ON 10/12/2020</p>
          {messages.map(message => (
              message.name ? (
                <div className="chatScreen__message">
                  <Avatar className="chatScreen__image"
                  alt={message.name}
                  src={message.image}
                  />
                  <p className="chatScreen__text">{message.message}</p>
                </div>
              ) : (
                <div className="chatScreen__message">
                
                <p className="chatScreen__textUser">{message.message}</p>
              </div>
              )
                
          ))} 
            
                <form className="chatScreen__input">
                    <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
             
        </div>
    )
}

export default ChatScreen
