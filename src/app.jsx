
import "./app.css";

if (DEV_MOD) {
	console.log("app load", Date.now());
}

// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom";




// eslint-disable-next-line no-unused-vars
import MainWindow from "./components/MainWindow.jsx";


ReactDOM.render(

	<MainWindow />,
	document.getElementById("app-container"),
		
	function() {
		if (DEV_MOD) {
			console.log ("MainWindow mount", Date.now());
		}
		
	}
);


