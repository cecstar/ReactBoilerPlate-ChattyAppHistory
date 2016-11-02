import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import App from './App.jsx';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', username: ''};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    if (event.key === 'Enter')
    this.props.newMessage(this.state.username, this.state.value)
  }

  render() {
    return (
      <div>
      <footer>
        <input
          id="username"
          type="text"
          placeholder={this.props.currentUser.name}
          onChange={this.handleChangeUsername}
          />
        <input
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          onClick={this.handleSubmit}
          />
      </footer>
      </div>
    );
  }
}
export default ChatBar;
