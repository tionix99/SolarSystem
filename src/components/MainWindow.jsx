
if (DEV_MOD) {
	console.log("MainWindow load", Date.now());
}

// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
import TopPanel from "./TopPanel.jsx";
// eslint-disable-next-line no-unused-vars
import LeftPanel from "./LeftPanel.jsx";

// eslint-disable-next-line no-unused-vars
import { Provider } from "react-redux";

import { CREATE_STORE } from "../store/operations.js";

let store= CREATE_STORE(); 

function MainPanel() {
	if (DEV_MOD) {
		console.log (
			"MainPanel render", 
			
			Date.now()
		);
	}
	

	return <div
		id= "main-window"
	>
		<Provider 
			store= {store}
		>
			<TopPanel />
			<div>
				<LeftPanel />
				<canvas
					id= "s-view"
				>
					Браузер не поддерживает отрисовку canvas
				</canvas>
			</div>
			
		</Provider>

	</div>;
}

export default MainPanel;