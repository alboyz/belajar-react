import React, { Component } from 'react';
class Header extends Component{
		constructor(props){
				super(props);
				this.state = {
						daftar: "Daftar Nama Masakan Nusantara",
						dataList: this.props.List
				}
				this.HandlePesan = this.HandlePesan.bind(this )
		}

		HandlePesan(value){
				alert("Halaman Header")
				alert(value)
		}
		render() {
				return (
						<div>
								<h2>Makanan Khas Indonesia</h2>
								<p>{this.state.daftar}</p>
								<p>{this.state.dataList}</p>
								<a href="/"onClick={()=>this.HandlePesan("Pesan dari Header")}>Halaman Header</a>
						</div>				
				);			
		}

}

export default Header;
