import React, { Component } from 'react';
//import component file terpisah
import Header from './Header';
import Footer from './Footer';
//import List from './List';
import Top from './Top'
import Form from './Form'
//import Main from './Main'

class App extends Component {
		render() {

				return (
						//	memasukan class Header 			

						<div>
								<Header/>	
								<Top/>
								<Form />
							
						{
								//<Main/>
								//	<List/>
						}
						<Footer name="Makanan Nusantara"/>

				</div>
				);

		}

}

export default App;
