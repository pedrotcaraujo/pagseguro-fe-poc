import React from 'react';
import Message from './Message.jsx';
import MessageBox from './MessageBox.jsx';
import {Card, List} from 'material-ui';
import trim from 'trim';

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			messages: [
				'Hello Codecamp PagSeguro',
				'This is a React App!'
			]
		};
	}

	onChange(evt) {
        this.setState({
            message: evt.target.value
        })
    }

    onKeyUp(evt) {
        if(evt.keyCode === 13 && trim(evt.target.value) != '') {
            evt.preventDefault();
            this.setState({
                message: ''
            });
            this.setState({messages: this.state.messages.concat([evt.target.value])});
            console.log('Sent a new message: ', evt.target.value);
        }
    }

	render() {
		var messageNodes = this.state.messages.map((message, i) => {
			return (
					<Message key={i} message={message} />
				);
		});

		return (
			<div style={{
                flexGrow: 2,
				marginLeft: 30
            }}>
			<Card >
				<List>
					{messageNodes}
				</List>
			</Card>
			<Card style={{
                maxWidth: 1200,
                margin: '30px auto',
                padding: 30

            }}>
                <textarea
                value={this.state.message}
                onChange={this.onChange.bind(this)}
                onKeyUp={this.onKeyUp.bind(this)}
                style={{
                    width: '100%',
                    borderColor: '#D0D0D0',
                    resize: 'none',
                    borderRadius: 3,
                    minHeight: 50,
                    color: '#555',
                    fontSize: 14,
                    outline: 'auto 0px'
                }}/>
            </Card>
			</div>
			);
	}
}

export default MessageList;