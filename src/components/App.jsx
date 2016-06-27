import React from 'react';
import MessageList from './MessageList.jsx';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
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
			muiTheme: getMuiTheme(baseTheme)
		};
	}


	render() {
		return (
			<div>
				<AppBar title="PagSeguro React APP" />
				<MessageList />
			</div>
		)
	}
}

export default App;