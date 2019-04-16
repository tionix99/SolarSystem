
if (DEV_MOD) {
	console.log("LeftPanel load", Date.now());
}

import "./LeftPanel.css";

// eslint-disable-next-line no-unused-vars
import React from "react";
import { connect } from "react-redux";

// eslint-disable-next-line no-unused-vars
import PlanetList from "./PlanetList.jsx"; 


function LeftPanel(props) { 
	if (DEV_MOD) {
		console.log (
			"LeftPanel render", 
			
			Date.now()
		);
	}

	return <div
		className= {props.leftPanel? "left-panel grey-border show" : "left-panel grey-border"}
	>	
		<PlanetList />
	</div>;


}



export default connect(
	function(state) {
		let panelSet= state.get("panelSet");

		return { 
			leftPanel: panelSet.left,
		};
	},

	
)(LeftPanel);

