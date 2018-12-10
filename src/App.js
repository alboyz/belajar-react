import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';


class App extends Component {
	render() {
				
			return (
		//	memasukan class Header 			
							
		<div>
		<Header/>	
		<h1>Rendering Element</h1>
	  </div>
	);

	}
}


export default App;
