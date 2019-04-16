const redux= require("redux");
import reducer from "./reducer.js";
/* import planets from "./planets.js"; */

import { Map } from "immutable";
import state from "./state.js";

import { 
	/* initView, */
	
	startPaint,

	changeViewZoom,

	changeObjectZoom,
	changeObjectSpeed,

	changeOrbitZoom,

	selectObject
} from "../view/paint.js";




var store;
function CREATE_STORE() {
	if (DEV_MOD) {
		console.log (
			"*** CREATE_STORE", 
			Date.now()
		);
	}

	store= redux.createStore(reducer); //В метод redux.createStore() следует передать функцию reducer, которая используется для обновления хранилища.
	return store;
}


function INITIAL_STATE() { 
	if (DEV_MOD) {
		console.log (
			"*** INITIAL_STATE", 
			Date.now()
		);
	}
	
	return Map(state);
}

function START_PAINT(state) {
	if (DEV_MOD) {
		console.log (
			"*** START_PAINT", 
			Date.now()
		);
	}

	startPaint(
		state.get("viewSet")
	);

	return state;
}









function SHOW_LEFTPANEL(state) {
	if (DEV_MOD) {
		console.log (
			"*** SHOW_LEFTPANEL", 
			Date.now()
		);
	}

	let panelSet= state.get("panelSet");

	panelSet.left= !panelSet.left;

	return state.set("panelSet", Object.assign({}, panelSet));

}


function CHANGE_VWZOOM(state, zoom) {
	if (DEV_MOD) {
		console.log (
			"*** CHANGE_VWZOOM", 
			Date.now()
		);
	}

	let viewSet= state.get("viewSet");


	viewSet.viewZoom= zoom;
	
	changeViewZoom(zoom);
	return state.set("viewSet", Object.assign({}, viewSet));

}

function CHANGE_OBJZOOM (state, zoom) {
	if (DEV_MOD) {
		console.log (
			"*** CHANGE_OBJZOOM", 
			Date.now()
		);
	}

	let viewSet= state.get("viewSet");
	viewSet.objectZoom= zoom;

	changeObjectZoom(zoom);

	return state.set("viewSet", Object.assign({}, viewSet));
}


function CHANGE_OBJSPEED (state, speed) {
	if (DEV_MOD) {
		console.log (
			"*** CHANGE_OBJSPEED", 
			speed,
			Date.now()
		);
	}
	
	let viewSet= state.get("viewSet");
	viewSet.objectSpeed= speed;
	changeObjectSpeed(speed);

	return state.set("viewSet", Object.assign({}, viewSet));

}







function CHANGE_ORBZOOM(state, zoom) {
	if (DEV_MOD) {
		console.log (
			"*** CHANGE_ORBZOOM", 
			Date.now()
		);
	}

	let viewSet= state.get("viewSet");
	
	changeOrbitZoom(
		viewSet.orbitZoom,
		viewSet.orbitZoom= zoom
	);

	return state.set("viewSet", Object.assign({}, viewSet));
}


function SELECT_OBJECT(state, name) {
	if (DEV_MOD) {
		console.log (
			"*** SELECT_OBJECT", 
			Date.now()
		);
	}

	let selectedObjects= state.get("selectedObjects");
	let index= selectedObjects.indexOf(name);
	
	if (index=== -1) {
		selectedObjects.push(name);
	} else {
		selectedObjects.splice(index, 1);
	}

	selectedObjects= [...selectedObjects];
	selectObject(selectedObjects);
	
	return state.set("selectedObjects", selectedObjects);
}




export {
	CREATE_STORE,
	
	INITIAL_STATE,

	START_PAINT,
	SHOW_LEFTPANEL,

	CHANGE_VWZOOM,

	CHANGE_OBJZOOM,
	CHANGE_OBJSPEED,

	CHANGE_ORBZOOM,
	
	SELECT_OBJECT
};		