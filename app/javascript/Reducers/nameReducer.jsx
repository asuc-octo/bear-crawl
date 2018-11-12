export default function nameReducer(state, action) {
	console.log("DEBUG - NAME", state, action);
	switch(action.type) {
		case "SET_NAMES":
			let {firstName, lastName} = action.payload;
	}
}