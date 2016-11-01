import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <div id="message-list">
          <MessageList />
          <Message />
        </div>
      <ChatBar />
    </div>
    );
  }
}
export default App;
