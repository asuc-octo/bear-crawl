function majorReducer(state, action) {
	if state == null {
		return {majors: []}
	} else {
		return {majors: action.payload}
	}
}

export default majorReducer