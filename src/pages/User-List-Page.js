import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NoData from "../components/No-Data";
import UserListTable from "../components/User-List-Table";
import DetailUserModal from "../components/Detail-User-Modal";

import { useSelector, useDispatch } from "react-redux";
import { showMessageToast } from "../utils/actions";

export default function UserListPage() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users);

	const [user, setUser] = useState({});
	const [detailUserModalState, setDetailUserModalState] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		document.title = "Users List";
	}, []);

	const handleViewUser = (user) => {
		setUser({
			...user,
			showPassword: false,
		});
		setDetailUserModalState(true);
	};

	const handleViewPasswordUser = () => {
		setUser({
			...user,
			showPassword: !user.showPassword,
		});
	};

	const handleCreateUser = () => {
		navigate("/user-list/create");
	};

	const handleAfterCreateUser = () => {
		if (location.state) {
			dispatch(showMessageToast(location.state.toastState));
			window.history.replaceState({}, document.title);
			setTimeout(() => {
				dispatch(
					showMessageToast({
						show: false,
						title: "",
						message: "",
					})
				);
			}, 5000);
		}
	};

	useEffect(() => {
		handleAfterCreateUser(); // eslint-disable-next-line
	}, []);

	const style = {
		page: {
			backgroundColor: "#F9F7F7",
			paddingTop: "30px",
		},
		title: {
			color: "#112D4E",
		},
		button: {
			borderRadius: "15px",
		},
	};

	return (
		<div className="min-vh-100" style={style.page}>
			<div className="container">
				<div className="row justify-content-between align-items-center mb-5">
					<div className="col-auto">
						<h3 style={style.title}>Users List</h3>
					</div>
					<div className="col-auto">
						<button
							className="btn btn-outline-primary"
							style={style.button}
							onClick={() => handleCreateUser()}
						>
							Create User
						</button>
					</div>
				</div>
				{users.length > 0 ? (
					<UserListTable
						users={users}
						handleViewUser={handleViewUser}
					/>
				) : (
					<div>
						<NoData />
					</div>
				)}
			</div>
			{detailUserModalState && (
				<DetailUserModal
					user={user}
					detailUserModalState={detailUserModalState}
					setDetailUserModalState={setDetailUserModalState}
					handleViewPasswordUser={handleViewPasswordUser}
				/>
			)}
		</div>
	);
}
