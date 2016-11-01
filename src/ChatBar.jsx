import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import App from './App.jsx';

class ChatBar extends Component {
  render() {
    return (
      <footer>
        <input
          id="username"
          type="text"
          placeholder={this.props.currentUser.name}
          />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          />
      </footer>
    );
  }
}
export default ChatBar;
