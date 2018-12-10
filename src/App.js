import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';
import Footer from './Footer';

class App extends Component {
	render() {
				
			return (
		//	memasukan class Header 			
							
		<div>
		<Header/>	
		<h1>Rendering Element</h1>
		<Footer/>
	  </div>
	);

	}
}


export default App;
