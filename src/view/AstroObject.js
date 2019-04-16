import {
	Path
} from "paper";


import scaleSet from "../set/scaleSet.js";


function kmToPixels(km) {
	return km/scaleSet.pixel;
}

function AstroObject(center, data, speed, vectorLayer, orbitLayer, objectLayer) {
	this.center= center;

	if (data.orbit) {
		let orbitLength= kmToPixels(data.orbit.a);

		this.vector= new Path.Line({
			from: this.center,
			to: center.add([ 0, orbitLength+ 50]),
			parent: vectorLayer,
		});

		this.orbit= new Path.Circle({
			center: this.center,
			radius: orbitLength,
			parent: orbitLayer,
		});
		
		this.realAngle= (360/data.orbit.sdp)/60; // угловая скорость в cекунду (при условии что frameRate таки 60 )
		
		this.speed= this.realAngle*speed; 
		//  360 - один оборот в градусах, 60 - предполагаемая частоста кадров в секунду
		this.setSpeed= (speed)=> {
			this.speed= this.realAngle*speed; 
		};

		this.setPosition= ()=> {
			this.intersection= this.orbit.getIntersections(this.vector);
			this.object.position= this.intersection[0].point;
		};
	}

	this.object= new Path.Circle({
		center: this.center,
		applyMatrix: false,

		radius: kmToPixels(data.object.r),
		fillColor: data.object.color,

		onFrame: data.orbit? 
			()=> {

				this.vector.rotate(-this.speed, this.center);
				this.setPosition();
				
			} 
			: false,

		parent: objectLayer
		
	});
	
}

export default AstroObject;