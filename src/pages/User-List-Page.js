import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import NoData from "../components/No-Data";
import UserListTable from "../components/User-List-Table";
import MessageToast from "../components/Message-Toast";
import DetailUserModal from "../components/Detail-User-Modal";

export default function UserListPage() {
	const [users, setUsers] = useState([]);

	const [user, setUser] = useState({});
	const [detailUserModalState, setDetailUserModalState] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const [toastState, setToastState] = useState({
		show: false,
		title: "",
		message: "",
	});

	const navigate = useNavigate();
	const location = useLocation();

	const getUsers = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			let userList = localStorage.getItem("users");

			if (userList === null || JSON.parse(userList).length === 0) {
				//empty
			} else {
				setUsers(JSON.parse(userList));
			}
		}, 1000);
	};

	useEffect(() => {
		getUsers();
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
			setToastState(location.state.toastState);
			window.history.replaceState({}, document.title);
			setTimeout(() => {
				setToastState({
					...toastState,
					show: false,
					title: "",
					message: "",
				});
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
				{isLoading ? (
					<Loader />
				) : users.length > 0 ? (
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
			<MessageToast
				toastState={toastState}
				setToastState={setToastState}
			/>
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
