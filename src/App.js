import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
     
     
        <Switch>

      {/* Chat individual screen */}
      <Route path="/chat/:person">
            {/* Header chat */}
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

     {/* Chats screen */}
          <Route path="/chat">
            {/* Header chat */}
            <Header backButton="/" />
            <Chats />
          </Route>

     {/* Tinder Cards */}
     {/* Buttons bellow Tinder Cards */}
          <Route path="/">
            {/* Header */}
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

     {/* Individual chat screen */}
        </Switch>

     </Router>
    </div>
  );
}

export default App;
