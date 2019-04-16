import scaleSet from "../set/scaleSet.js";


const state= {
	panelSet: {
		left: true,
	},

	viewSet: {
		viewZoom: scaleSet.viewZoomDef,
		
		objectZoom: scaleSet.objectZoomDef,
		objectSpeed: 101,

		orbitZoom:  scaleSet.orbitZoomDef,
	},

	selectedObjects: []

};

export default state;