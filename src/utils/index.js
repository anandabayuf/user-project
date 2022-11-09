import { combineReducers } from "redux";
import { usersReducer, messageToastReducer } from "./reducers";

const allReducers = combineReducers({
	users: usersReducer,
	messageToast: messageToastReducer,
});

export default allReducers;
