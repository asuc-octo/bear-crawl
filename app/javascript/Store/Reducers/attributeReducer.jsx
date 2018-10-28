export default function attributeReducer(state, action) {
	console.log("DEBUG - ATTR", state, action);
	switch(action.type) {
		case "SET_ATTRS": 
			let {year, interests, majors} = action.payload
			return {year, interests, majors}
	}
	return {majors: [], interests: [], year: ""};
}