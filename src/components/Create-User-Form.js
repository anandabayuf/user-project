import Loader from "./Loader";

export default function CreateUserForm(props) {
	const style = {
		label: {
			color: "#3F72AF",
		},
		input: {
			borderRadius: "10px",
			borderColor: "#DBE2EF",
			color: "#3F72AF",
		},
		button: {
			borderRadius: "15px",
		},
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<div className="mb-3">
				<label
					htmlFor="username"
					className="form-label"
					style={style.label}
				>
					Username
				</label>
				<input
					type="text"
					maxLength="16"
					className="form-control"
					id="username"
					name="username"
					value={props.user.username}
					onChange={props.handleChange}
					style={style.input}
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="password"
					className="form-label"
					style={style.label}
				>
					Password
				</label>
				<input
					type="password"
					maxLength="8"
					autoComplete="on"
					className="form-control"
					id="password"
					name="password"
					value={props.user.password}
					onChange={props.handleChange}
					style={style.input}
					onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}}
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="email"
					className="form-label"
					style={style.label}
				>
					Email
				</label>
				<input
					type="email"
					className="form-control"
					id="email"
					name="email"
					value={props.user.email}
					onChange={props.handleChange}
					style={style.input}
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="phone"
					className="form-label"
					style={style.label}
				>
					Phone
				</label>
				<input
					type="text"
					maxLength="16"
					className="form-control"
					id="phone"
					name="phone"
					value={props.user.phone}
					onChange={props.handleChange}
					style={style.input}
					onKeyPress={(event) => {
						if (!/[0-9]/.test(event.key)) {
							event.preventDefault();
						}
					}}
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="address"
					className="form-label"
					style={style.label}
				>
					Address
				</label>
				<input
					type="text"
					className="form-control"
					id="address"
					name="address"
					value={props.user.address}
					onChange={props.handleChange}
					style={style.input}
				/>
			</div>
			{props.isLoading ? (
				<div className="mt-5">
					<Loader />
				</div>
			) : (
				<div className="row mt-5">
					<div className="col">
						<div className="d-grid gap-2">
							<button
								className="btn btn-outline-dark"
								style={style.button}
								type="button"
								onClick={() => props.handleCancel()}
							>
								View Data
							</button>
						</div>
					</div>
					<div className="col">
						<div className="d-grid gap-2">
							<button
								className="btn btn-success"
								style={style.button}
								type="submit"
								disabled={
									props.user.username === "" ||
									props.user.password === "" ||
									props.user.email === "" ||
									props.user.phone === "" ||
									props.user.address === ""
								}
							>
								Create
							</button>
						</div>
					</div>
				</div>
			)}
		</form>
	);
}
