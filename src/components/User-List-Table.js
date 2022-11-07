export default function UserListTable(props) {
	const style = {
		button: {
			borderRadius: "15px",
			color: "#3F72AF",
		},
		text: {
			color: "#3F72AF",
		},
	};

	return (
		<table className="table">
			<thead className="text-center">
				<tr style={style.text}>
					<th scope="col">USERNAME</th>
					<th scope="col">EMAIL</th>
					<th scope="col">PHONE</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{props.users &&
					props.users.map((el, index) => {
						return (
							<tr
								key={index}
								style={style.text}
								className="text-center"
							>
								<td>{el.username}</td>
								<td>{el.email}</td>
								<td>{el.phone}</td>
								<td className="text-center">
									<button
										className="btn btn-light"
										style={style.button}
										onClick={() => props.handleViewUser(el)}
									>
										View Detail
									</button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
}
