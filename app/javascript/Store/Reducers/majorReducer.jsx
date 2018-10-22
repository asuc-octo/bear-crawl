function majorReducer(state, action) {
	console.log(12);
	console.log(state);
	console.log(action);
	switch(action.type) {
		case "ADD_MAJOR": 
			return state.majors.push(action.payload);
		case "REMOVE_MAJOR":
			index = state.majors.indexOf(action.payload);
			return state.splice(index, 1);
	}
	return {majors: []};
}

export default majorReducer