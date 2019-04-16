if (DEV_MOD) {
	console.log("TopPanel load", Date.now());
}
import "./TopPanel.css";

// eslint-disable-next-line no-unused-vars
import React from "react";

import { connect } from "react-redux";


// eslint-disable-next-line no-unused-vars
import InputNumber from "./InputNumber.jsx"; 
import scaleSet from "../set/scaleSet.js";



function TopPanel(props) {
	if (DEV_MOD) {
		console.log (
			"TopPanel render", 
			Date.now()
		);
	}

	return <div
		className= "top-panel grey-border"
	>
		<ul
			className= "str"

		>	
			<li>
				<button
					className= {props.leftPanel? "ON" : ""}
					onClick= {props.showLeftPanel} 
				>
						Планеты
				</button>
				<button
					title= {"Запуск/Пауза анимации планет"}
					onClick= {props.startPaint}
				>
						Старт/Пауза
				</button> 
			</li>
			<li>

				<label>
					Масштаб:
				</label>
				<label
					title= "изменение масштаба модели"
				>
					СС:
				</label>
				<InputNumber 
					min= {scaleSet.zoomRangeMin}
					max= {scaleSet.zoomRangeMax}
					step= {scaleSet.zoomRangeStep}

					value= {props.viewZoom}
					onMouseUp= {props.changeViewZoom}

				/>
				<label
					title= "Коэффициент увеличения размеров планет (кроме солнца): 1 - истинный размер в масштабе модели, 50 - 50 кратное увеличение"
				>
					Планеты:
					
				</label>
				<InputNumber 
					min= {scaleSet.zoomRangeMin}
					max= {scaleSet.zoomRangeMax}
					step= {scaleSet.zoomRangeStep}

					value= {props.objectZoom}
					onMouseUp= {props.changeObjectZoom}

				/>

				<label
					title= "Коэффициент сжатия радиуса орбит: 1 - истинный размер орбиты в масштабе модели, 50 - 50-ти кратное сжатие орбит без изменения размеров планет"
				>
					Орбиты:
				</label>
				<InputNumber 
					min= {scaleSet.zoomRangeMin}
					max= {scaleSet.zoomRangeMax}
					step= {scaleSet.zoomRangeStep}

					value= {props.orbitZoom}
					onMouseUp= {props.changeOrbitZoom}

				/> 


				<label
					title= "скорость анимирования движения планет в сутках в секунду"
				>
					Скорость:
				</label>
				<InputNumber 
					min= {1}
					max= {365}
					step= {4}

					value= {props.objectSpeed}
					onMouseUp= {props.changeObjectSpeed}

				/> 
			</li>


				
		</ul>
			
		
			

	</div>;

}



const TopPanelActions= {
	startPaint: function() {
		if (DEV_MOD) {
			console.log (
				"!!! startPaint", 
				Date.now()
			);
		}
	
		return {type: "START_PAINT"};
	},

	showLeftPanel: function() {
		if (DEV_MOD) {
			console.log (
				"!!! showLeftPanel", 
				Date.now()
			);
		}
	
		return {type: "SHOW_LEFTPANEL"};
	},

	changeViewZoom:function changeViewZoom(zoom) {
		if (DEV_MOD) {
			console.log (
				"!!! changeViewZoom", 
				Date.now()
			);
		}
	
		return {
			type: "CHANGE_VWZOOM",
			zoom: zoom
		};
	
	},

	changeObjectZoom: function(zoom) {
		if (DEV_MOD) {
			console.log (
				"!!! changeObjectZoom", 
				Date.now()
			);
		}

		return {
			type: "CHANGE_OBJZOOM",
			zoom: zoom
		};
	},

	changeObjectSpeed: function(speed) {
		if (DEV_MOD) {
			console.log (
				"!!! changeObjectSpeed", 
				speed,
				Date.now()
			);
		}

		return {
			type: "CHANGE_OBJSPEED",
			speed: speed
		};
	},


	changeOrbitZoom: function(zoom) {
		if (DEV_MOD) {
			console.log (
				"!!! changeOrbitZoom", 
				Date.now()
			);
		}
	
		return {
			type: "CHANGE_ORBZOOM",
			zoom: zoom
		};
	}

};




export default connect(
	function(state) {
		let panelSet= state.get("panelSet");
		let viewSet= state.get("viewSet");

		return { 
			leftPanel: panelSet.left,
			
			viewZoom: viewSet.viewZoom,
			
			objectZoom: viewSet.objectZoom,
			objectSpeed: viewSet.objectSpeed,

			orbitZoom: viewSet.orbitZoom,

		};
	},

	TopPanelActions //  набор действий, которые вызываются в компоненте LeftPanel или в его дочерних компонентах. И опять же эти действия после этого мы сможем получить в компоненте LeftPanel через значения this.props
)(TopPanel);
