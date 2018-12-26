import React, { Component } from "react"

class Main extends Component {
		constructor(props){
				super(props)
				this.state = {
						title: "Menu Makanan",
						title2: "Menu Minuman"
				}

				this.rubahData=this.rubahData.bind(this)
		}

		rubahData(){
				this.setState((state) => {
						return {
								title:state.title2,
								title2:state.title
						}

				})

		}
		handleChange(e){
				console.log(e.target.value)

		}


		render() {
				return(
						<div>
								<h3>{this.state.title}</h3>
								<h2>{this.state.title2}</h2>
								<button onClick={this.rubahData}>Rubah Data</button>
								<br /> <br />
								<input type="text" onChange={this.handleChange} />
						</div>
				)
		}
}


export default Main 
