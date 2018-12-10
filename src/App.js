import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';


//function component
const Footer = () => {
	return (
		<div>
					<h4>Halaman Footer</h4>
					<p>@2018</p>
		</div>
	)

}

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
