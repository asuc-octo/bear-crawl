export default function majorReducer(state, action) {
	console.log("DEBUG - MAJOR", state, action);
	switch(action.type) {
		case "ADD_MAJOR": 
			return state.majors.push(action.payload);
		case "REMOVE_MAJOR":
			let index = state.majors.indexOf(action.payload);
			return state.majors.splice(index, 1);
	}
	return {majors: []};
}