import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="message">
        <span className="username">{this.props.body.username}</span>
        <span className="content">{this.props.body.content}.</span>
      </div>
    );
  }
}
export default Message;



// <div className="message system">
//   Anonymous1 changed their name to nomnom.
// </div>
