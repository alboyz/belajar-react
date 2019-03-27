import React, { Component } from 'react';
class Header extends Component{
		constructor(props){
				super(props);
				this.state = {
						daftar: "Daftar Nama Masakan Nusantara",
						dataList: this.props.List,
						statusRendering: true
				}
				this.HandlePesan = this.HandlePesan.bind(this )
		}

		HandlePesan(value, e){
				e.preventDefault()
				alert("Halaman Header")
				alert(value)

		}

		componentDidMount(){
				console.log("Jalan Component Did Mount")
		}
							render() {
									console.log("Jalan :Render")
									return (
									<div>
											{this.state.statusRendering === true ? (
													<div>
													<h1>Selamat Datang</h1>
													<h2>Silahkan Pilih Makanan</h2>

													</div>
											):(
													<div>
													<h1>Selamat Tinggal</h1>
													<h2>Jangan lupa kembali</h2>
													</div>

									)}
									</div>
									
									)
		

		//				return (
		//						<div>
		//								<h2>Makanan Khas Indonesia</h2>
		//								<p>{this.state.daftar}</p>
		//								<p>{this.state.dataList}</p>
		//								<a href="/"onClick={(e) => this.HandlePesan("Pesan dari Header", e)}>Halaman Header</a>
		//						</div>

    }	
} 	





 
export default Header;
