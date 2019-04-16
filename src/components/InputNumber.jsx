
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./InputNumber.css";

// eslint-disable-next-line no-unused-vars
class InputNumber extends React.Component { 
	constructor(props) {
		super(props);

		this.state= { // компоненты React типа input не обновляют value без изменения state или props
			val: 0,
		};

		this.onKeyDown= (e)=> { // запрет ввода с клавиатуры
			e.preventDefault();
		};

		this.onChange= (e)=> { // событие изменения значения
			this.setState({
				val: Number(e.target.value)
			});

		};
		
		this.onMouseUp= ()=> { // событие окончания изменения значения
			this.props.onMouseUp(this.state.val);
		};


		this.state.val= this.props.value; // установка первичных значений
		this.value= this.props.value; 

	}

	shouldComponentUpdate(nextProps, nextState) { 
		if (this.state.val!== nextState.val) {
			this.value= nextState.val;
			return true;
		}

		if (this.value!== nextProps.value) {
			this.value= nextProps.value;
			return true;
		}
		
		return false;
	}

	render() {

		
		return <input 
			type= "number"
			value= {this.value}
			
			min= {this.props.min}
			max= {this.props.max}

			step= {this.props.step}

			onChange= {this.onChange}
			onKeyDown= {this.onKeyDown}
			onMouseUp= {this.onMouseUp}

		/>;
	}
}


export default InputNumber;
