import React from 'react';
import {ListItem, Avatar} from 'material-ui';

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem leftAvatar={<Avatar src="https://67.media.tumblr.com/avatar_2e17f2f6e745_128.png"/>}>{this.props.message}</ListItem>
			);
	}
}

export default Message;