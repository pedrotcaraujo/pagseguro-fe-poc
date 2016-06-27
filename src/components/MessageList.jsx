import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [
				{id: 0, value: 'Hello Codecamp PagSeguro'},
				{id: 1, value: 'This is a React App!'}
			]
		};
	}

	render() {
		var messageNodes = this.state.messages.map((message) => {
			return (
					<Message key={message.id} message={message} />
				);
		});

		return (
				<div>{messageNodes}</div>
			);
	}
}

export default MessageList;