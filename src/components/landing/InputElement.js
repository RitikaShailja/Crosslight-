import React , { Component } from 'react';

class InputElement extends Component {
	constructor(props){
		super(props)

		this.state = {
			width : this.props.width !== undefined ? this.props.width : "100%", 
			height : this.props.height !== undefined ? this.props.height : "40px",
			placeholder : this.props.placeholder !== undefined ? this.props.placeholder : "",
			value : ""
		}
	}

	componentWillReceiveProps(nextProps){
		// width
		if (this.props.width !== nextProps.width){
			this.setState({
				width : nextProps.width
			})
		}

		// height
		if (this.props.height !== nextProps.height){
			 this.setState({
			 	width : nextProps.height
			 })
		}

		// placeholder
		if (this.props.placeholder !== nextProps.placeholder){
			this.setState({
				placeholder : nextProps.placeholder
			})
		}
	}

	// input change
	inputChange(e){
		this.setState({
			value : e.target.value
		})
	}

	render(){
		var inputStyle = {
			width :this.props.width,
			height :this.props.height,
			paddingLeft : "3%",
			borderRadius :"4px",
			border :"1px solid lightgray"
		}
		return(
			<div>
				<input 
					type = "text" 
					style = {inputStyle}
					
					
					{...this.props} />
			</div>
		)
	}
}
export default InputElement;