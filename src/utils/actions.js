export const addUser = (user) => {
	return {
		type: "ADD_USER",
		payload: user,
	};
};

export const showMessageToast = (toastState) => {
	return {
		type: "SHOW_HIDE_MESSAGE_TOAST",
		payload: toastState,
	};
};
