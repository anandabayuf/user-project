import { combineReducers } from "redux";
import usersReducer from "./reducers";

const allReducers = combineReducers({
	users: usersReducer,
});

export default allReducers;
