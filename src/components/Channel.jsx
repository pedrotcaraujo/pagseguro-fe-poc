import React from 'react';
import {ListItem} from 'material-ui';

class Channel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem>{this.props.channel.value}</ListItem>
			);
	}
}

export default Channel;