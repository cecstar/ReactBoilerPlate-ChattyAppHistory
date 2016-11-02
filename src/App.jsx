import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.postNewMessage = this.postNewMessage.bind(this)

    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

postNewMessage(name, content){
const newMessage = {id:3, username: name, content: content}
const post = this.state.messages.concat(newMessage)
this.setState({messages: post})
}
  render() {
    console.log(this.state)
    console.log(this.state.messages)
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty Cathy</h1>
        </nav>
        <div id="message-list">
          <MessageList data={this.state.messages}/>
        </div>
      <ChatBar currentUser={this.state.currentUser} newMessage={this.postNewMessage}/>
    </div>
    );
  }
}

export default App;
