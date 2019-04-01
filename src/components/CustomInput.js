import React, { Component } from "react"

class CustomInput extends Component{
		constructor(props){
				super(props)
				this.state ={
						value: "input pertama"	
				}
				this.handleInput=this.handleInput.bind(this);
				this.textInput=React.createRef();
		}
		handleInput(){
				this.setState({value: ""})
				this.textInput.current.focus();

		}

		render() {
				return (
						<div>
								<input type="text" value={this.state.value} ref={this.textInput} />

								<button onClick={this.handleInput}>kirim</button>
						</div>
				)
		}
}
export default CustomInput;
