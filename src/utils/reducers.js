const usersReducer = (state = [], action) => {
	switch (action.type) {
		case "ADDITION":
			return [...state, action.payload];
		default:
			return state;
	}
};

export default usersReducer;
