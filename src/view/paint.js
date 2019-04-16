
import {
	Project,
	Layer,
} from "paper";

import orbits from "../set/orbits.js";

import scaleSet from "../set/scaleSet.js";
import AstroObject from "./AstroObject.js";

const blueColor= "#006fffcc"; 
const orangeColor= "#ff6300"; 
const blackColor= "black";

var SolarSystem;

var vectorLayer;
var orbitLayer;
var objectLayer;

var SolarItems= {};

var viewZoom;
var strokeWidth;



function initView(viewSet) {
	SolarSystem= new Project(document.getElementById("s-view"));
	
	SolarSystem.view.zoom= scaleSet.viewRatio;
	
	vectorLayer= new Layer({
		name: "vectorLayer"
	}); 

	orbitLayer= new Layer({
		name: "orbitLayer"
	}); 

	objectLayer= new Layer({
		name: "objectLayer"
	});

	for (var name in orbits) {
		SolarItems[name]= new AstroObject(
			SolarSystem.view.center, 
			orbits[name], 
			viewSet.objectSpeed, 
			vectorLayer, orbitLayer, objectLayer
		);
	}

	SolarSystem.view.pause();
	changeViewZoom(viewSet.viewZoom);
	changeObjectZoom(viewSet.objectZoom);
	changeOrbitZoom(1, viewSet.orbitZoom);

	orbitLayer.strokeColor= blueColor; 
	vectorLayer.strokeColor= blackColor;
}







function startPaint(viewSet) {
	if (DEV_MOD) {
		console.log (
			"*** startPaint", 
			/* viewSet, */
			Date.now()
		);
	}
	
	if (SolarSystem) {
		if (SolarSystem.view._animate) {
			SolarSystem.view.pause();

		} else {
			SolarSystem.view.play();
		}

	} else {
		initView(viewSet);
	}
}




function changeViewZoom(zoom) {
	viewZoom= scaleSet.viewRatio+ (zoom*(scaleSet.viewStep* (1+ zoom/5)));
	strokeWidth= scaleSet.orbitLineWidth* (1/viewZoom);


	if (DEV_MOD) {
		console.log (
			"*** changeViewZoom", 
			zoom,
			"s", strokeWidth,
			"z", viewZoom,
			Date.now()
		);
	}

	SolarSystem.view.zoom= viewZoom;
	orbitLayer.strokeWidth= strokeWidth;
	vectorLayer.strokeWidth= strokeWidth;

}

function changeObjectZoom(zoom) {
	if (DEV_MOD) {
		console.log (
			"*** changeObjectZoom", 
			Date.now()
		);
	}

	for (var name in SolarItems) {
		if (name!== "Sun") {
			SolarItems[name].object.setScaling(zoom);
		}
	}
	
}


function changeObjectSpeed(speed) {
	if (DEV_MOD) {
		console.log (
			"*** changeObjectSpeed", 
			Date.now()
		);
	}

	for (var name in SolarItems) {
		if (SolarItems[name].setSpeed) {
			SolarItems[name].setSpeed(speed);
		}
	}
	
}








function changeOrbitZoom(prewZoom, newZoom) {
	var scale= prewZoom/newZoom;

	if (DEV_MOD) {
		console.log (
			"*** changeOrbitZoom", 
			prewZoom, newZoom, scale,
			Date.now()
		);
	}

	/* SolarItems.Venus. */

	for (var name in SolarItems) {
		if (SolarItems[name].orbit) {
			SolarItems[name].orbit.scale(scale, scale, SolarItems[name].center);
			SolarItems[name].vector.scale(scale, scale, SolarItems[name].center);

			if (!SolarSystem.view._animate) {
				SolarItems[name].setPosition();
	
			}
			/* SolarItems[name].orbit.setScaling(newZoom); */
			/* SolarItems[name].vector.setScaling(newZoom); */
		}
	}



}








function selectObject(selectedObjects) {
	if (DEV_MOD) {
		console.log (
			"*** selectObject", 
			/* selectedObjects, */
			Date.now()
		);
	}

	for (var name in SolarItems) {
		if (SolarItems[name].orbit) {
			if (selectedObjects.indexOf(name)=== -1) {
				SolarItems[name].orbit.strokeColor= blueColor; /* "blue"; */
				SolarItems[name].orbit.strokeWidth= strokeWidth;
				
				SolarItems[name].vector.strokeColor= blackColor;
				SolarItems[name].vector.strokeWidth= strokeWidth;
	
			} else {
				SolarItems[name].orbit.strokeColor= orangeColor;
				SolarItems[name].orbit.strokeWidth= strokeWidth*3;
				
				SolarItems[name].vector.strokeColor= orangeColor;
				SolarItems[name].vector.strokeWidth= strokeWidth*3;
	
			}
		}
	}
}




export {
	initView,

	startPaint,


	changeViewZoom,

	changeObjectZoom,
	changeObjectSpeed,

	changeOrbitZoom,

	selectObject
};