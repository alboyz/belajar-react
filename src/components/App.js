import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';

class App extends Component {
	render() {
				
			return (
		//	memasukan class Header 			
							
		<div>
		<Header List ="3 Makanan Terbaik"/>
		<Top/>
		<List/>
		<Footer name="Makanan Nusantara"/>
		  </div>
	);

	}
}


export default App;
