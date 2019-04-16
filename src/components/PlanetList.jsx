if (DEV_MOD) {
	console.log("PlanetList load", Date.now());
}

import React from "react";

import { connect } from "react-redux";
import planets from "../set/planets.js";







// eslint-disable-next-line no-unused-vars
function PlanetItem(props) {
	return <ul>
		<li
			className= {props.className}
			onClick= {props.onClick.bind(false, props.planet.eng)}
		>
			<label>
				{props.planet.step}. 
				{props.planet[props.lang]}
			</label>
		</li>
			
	</ul>;

}



class PlanetList extends React.Component { // компонент генерации списка координат меток
	constructor(props) {
		super(props);

	}



	render() {
		if (DEV_MOD) {
			console.log (
				"PlanetList render", 
				Date.now()
			);
		}

		return <ul
			
		>
			{
				planets.map((planet)=> {
					
					return <PlanetItem 
						key= {planet.eng}
						
						planet= {planet}
						lang= "rus"
						
						className= {this.props.selectedObjects.indexOf(planet.eng)=== -1? "str" : "str ON"}
						onClick= {this.props.selectObject}
					/>;
				})
				
				

			}
			
		</ul>;
	}
}



const PlanetListActions= {
	selectObject: function(name) {
		if (DEV_MOD) {
			console.log (
				"!!! selectObject", 
				name,
				Date.now()
			);
		}
	
		return {
			type: "SELECT_OBJECT",
			name: name
		};
	}
};


// eslint-disable-next-line no-unused-vars
export default connect(
	function(state) {
		return { 
			selectedObjects: state.get("selectedObjects"),
		};
	},
	PlanetListActions 
)(PlanetList);

