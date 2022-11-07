import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateUserForm from "../components/Create-User-Form";

export default function CreateUserPage() {
	const [user, setUser] = useState({
		username: "",
		password: "",
		email: "",
		phone: "",
		address: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const key = e.target.name;
		const value = e.target.value;

		setUser({
			...user,
			[key]: value,
		});
	};

	const handleSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault();

		setTimeout(() => {
			let users = localStorage.getItem("users");

			if (users === null) {
				localStorage.setItem("users", JSON.stringify([user]));
			} else {
				let newUsers = JSON.parse(users);
				newUsers.push(user);
				localStorage.setItem("users", JSON.stringify(newUsers));
			}

			navigate("/user-list", {
				state: {
					toastState: {
						show: true,
						title: "Success",
						message: "Successfully create user",
					},
				},
			});
			setUser({
				username: "",
				password: "",
				email: "",
				phone: "",
				address: "",
			});
		}, 1000);
	};

	const handleCancel = () => {
		navigate("/user-list");
	};

	useEffect(() => {
		document.title = "Create User";
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
			borderRadius: "20px",
		},
	};

	return (
		<div className="min-vh-100" style={style.page}>
			<div className="container">
				<h3 className="mb-5" style={style.title}>
					Create User
				</h3>
				<CreateUserForm
					user={user}
					isLoading={isLoading}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleCancel={handleCancel}
				/>
			</div>
		</div>
	);
}
