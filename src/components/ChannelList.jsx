import React from 'react';
import Channel from './Channel.jsx';
import {Card, List} from 'material-ui';

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [
				{id: 0, value: 'PS-FE'},
				{id: 1, value: 'PS-BE'}
			]
		};
	}

	render() {
		var channelNodes = this.state.channels.map((channel) => {
			return (
					<Channel key={channel.id} channel={channel} />
				);
		});

		return (
			<Card style={{
                flexGrow: 1
            }}>
				<List>
					{channelNodes}
				</List>
			</Card>
			);
	}
}

export default ChannelList;