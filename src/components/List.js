import  React, { Component } from 'react';
import Image from './Image';

class List extends Component {
	render() {
		return (
			<ol>
				<Image
						Linkgambar=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
						lebar="500" 
				/>			    
				<li>Nasi padang</li>
				<Image
						Linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
						lebar="400" 
				/>	
			  <li>sate</li>
				<Image
						Linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
						lebar="300" 
				/>	
				<li>Soto Lamongan</li>
			</ol>
		)
	}
}

export default List;
