import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import {green500, green700, grey400, pinkA200} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
	constructor() {
		super();

	}

	static childContextTypes = {
		muiTheme: React.PropTypes.object
	}

	getChildContext() {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color: green500,
					primary2Color: green700,
					primary3Color: grey400,
					accent1Color: pinkA200
				}
			})
		};
	}


	render() {
		return (
			<div>
			<AppBar title="PagSeguro React App" />
				<div style={{
					display: 'flex',
					flexFlow: 'row wrap',
					maxWidth: 1200,
					width: '100%',
					margin: '30px auto 30px'
				}}>
					<ChannelList />
					<MessageList />
				</div>
			</div>
		)
	}
}

export default App;