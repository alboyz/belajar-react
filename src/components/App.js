import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';
import Footer from './Footer';
import List from './List';

class App extends Component {
	render() {
				
			return (
		//	memasukan class Header 			
							
		<div>
		<Header/>	
		<Footer name="Makanan Nusantara"/>
		<List/>
		  </div>
	);

	}
}


export default App;
