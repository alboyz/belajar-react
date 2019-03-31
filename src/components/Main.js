import React, { Component } from "react"

class Main extends Component {
		constructor(props){
				super(props)
				this.state = {
						title: "Menu Makanan",
						title2: "Menu Minuman",
						inputValue: ""
								}

				this.rubahData=this.rubahData.bind(this)
				this.handleChange=this.handleChange.bind(this)
		}

		"use strict";
		rubahData(){
				this.setState((state) => {
						return {
								title:state.title2,
								title2:state.title
						}

				})

		}
		handleChange(value, e){
				this.setState({ [value]: e.target.value})
				{
						console.log(e.target.value)

						//	cconst eventTarget = e.target.value
						//	cthis.setState((state)=>{
						//			return {
						//					inputValue: eventTarget
						//			}
						//	})

				}		
		}


		render() {
				return(
						<div>
								<h3>{this.state.title}</h3>
								<h2>{this.state.title2}</h2>
								<button onClick={this.rubahData}>Rubah Data</button>
								<br /> <br />
								<input type="text" 
										value={this.state.inputValue}
										placeholder = "nama"
										onChange={e => this.handleChange("inputValue", e)} />

								<input type="text" 
										value={this.state.inputKota}
										placeholder = "kota"
										onChange={e => this.handleChange("inputKota", e)} />


								{this.props.menuMakanan.map((value, index)=>{
										return (
												<div key={index}>
														<p>Nomor : {index+1}</p>
														<p>Nama Makanan : {value.nama}</p>
														<p>Harga : {value.harga}</p>
												</div>
										)
								})}




						</div>
				)
		}
}


export default Main 
