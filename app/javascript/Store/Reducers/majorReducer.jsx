function majorReducer(state, action) {
	console.log(12);
	console.log(state);
	console.log(action);
	if state == null {
		return {majors: []}
	} else {
		return {majors: action.payload}
	}
}

export default majorReducer