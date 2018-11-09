export default function profileReducer(state, action) {
    console.log("DEBUG - PROFILE", state, action)
	switch(action.type) {
		case "SET_NAME": 
			return {name: action.payload};
		case "SET_PASSWORD":
			return {password: action.payload};
		case "SET_PASS_AND_NAME":
			let {password, name} = action.payload;
			return {password, name};
	}
	return {name: "", password: ""};
}