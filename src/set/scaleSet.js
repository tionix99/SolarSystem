const scaleSet= {
	zoomRangeMin: 1,
	zoomRangeMax: 50,
	zoomRangeStep: 1,
	
	viewZoomDef: 1,
	viewRatio: 1/16, 
	viewStep: 0.01, // опорный шаг зуммирования изображения

	
	orbitZoomDef: 50, // кратность сокращения радиусов орбит относительно истинных
	orbitLineWidth: 0.25, // толщина контура объектов

	objectZoomDef: 12, // кратность увеличения размеров объекта относительно истинных
	pixel: 35000 // километров в пикселе 

};






export default scaleSet;