export const usersReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_USER":
			return [...state, action.payload];
		default:
			return state;
	}
};

export const messageToastReducer = (
	state = { show: false, title: "", message: "" },
	action
) => {
	switch (action.type) {
		case "SHOW_HIDE_MESSAGE_TOAST":
			return action.payload;
		default:
			return state;
	}
};
