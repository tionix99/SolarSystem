import { 
	INITIAL_STATE,
	
	SHOW_LEFTPANEL,

	START_PAINT,

	CHANGE_VWZOOM,
	CHANGE_OBJZOOM,
	CHANGE_OBJSPEED,

	CHANGE_ORBZOOM,

	SELECT_OBJECT
	
} from "./operations";


function reducer(
	state= INITIAL_STATE(), 
	action 
) {

	switch (action.type) {
	
	case "START_PAINT":
		return START_PAINT(state);

	case "SHOW_LEFTPANEL":
		return SHOW_LEFTPANEL(state);
	
	
	case "CHANGE_VWZOOM":
		return CHANGE_VWZOOM(state, action.zoom);

	case "CHANGE_OBJZOOM":
		return CHANGE_OBJZOOM(state, action.zoom);
	
	case "CHANGE_OBJSPEED":
		return CHANGE_OBJSPEED(state, action.speed);



	case "CHANGE_ORBZOOM":
		return CHANGE_ORBZOOM(state, action.zoom);
	

	case "SELECT_OBJECT":
		return SELECT_OBJECT(state, action.name);
	
	
	}



	return state; 
}

export default reducer;