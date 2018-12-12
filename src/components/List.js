import  React, { Component } from 'react';
import Image from './Image';

class List extends Component {
	render() {
		return (
			<ol>
				<Image/>
			     <li>Nasi padang</li>
					 <li>sate</li>
					 <li>Soto Lamongan</li>
			</ol>
		)
	}
}

export default List;
