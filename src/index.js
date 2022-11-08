import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { createStore } from "redux";
import allReducers from "./utils/index";
import { Provider } from "react-redux";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/User-List-Page";
import CreateUserPage from "./pages/Create-User-Page";

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/user-list" element={<App />}>
					<Route index element={<UserListPage />} />
					<Route path="create" element={<CreateUserPage />} />
				</Route>
				<Route path="*" element={<Navigate to="/user-list/create" />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
