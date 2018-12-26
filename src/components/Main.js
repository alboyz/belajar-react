import React, { Component } from "react"

class Main extends Component {
		constructor(props){
				super(props)
				this.state = {
						title: "Menu Makanan",
						title2: "Menu Minuman",
						inputValue: "Makanan"
				}

				this.rubahData=this.rubahData.bind(this)
				this.handleChange=this.handleChange.bind(this)
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
				const eventTarget = e.target.value
				this.setState((state)=>{
						return {
								inputValue: eventTarget
						}
				})
				
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
										onChange={this.handleChange} />
						</div>
				)
		}
}


export default Main 
