import { Modal } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function DetailUserModal(props) {
	const style = {
		iconButton: {
			borderRadius: "50px",
		},
	};

	return (
		<Modal
			show={props.detailUserModalState}
			onHide={() => props.setDetailUserModalState(false)}
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Detail User
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ padding: "30px" }}>
				<div className="row">
					<div className="col-6">
						<div className="mb-3">
							<h6>Username</h6>
							<p>{props.user.username}</p>
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<h6>Password</h6>
							<div className="row justify-content-between align-items-center">
								<div className="col-auto">
									<p>
										{props.user.showPassword
											? props.user.password
											: "••••••••"}
									</p>
								</div>
								<div className="col-auto">
									<button
										className="btn btn-outline-dark"
										style={style.iconButton}
										onClick={() =>
											props.handleViewPasswordUser()
										}
									>
										{props.user.showPassword ? (
											<EyeSlash size={16} />
										) : (
											<Eye size={16} />
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<h6>Email</h6>
							<p>{props.user.email}</p>
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<h6>Phone</h6>
							<p>{props.user.phone}</p>
						</div>
					</div>
					<div className="col-6">
						<div className="mb-3">
							<h6>Address</h6>
							<p>{props.user.address}</p>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
