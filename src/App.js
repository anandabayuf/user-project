import { Outlet } from "react-router-dom";
import MessageToast from "./components/Message-Toast";
import { useSelector, useDispatch } from "react-redux";
import { showMessageToast } from "./utils/actions";

function App() {
	const dispatch = useDispatch();
	const toastState = useSelector((state) => state.messageToast);

	const handleCloseMessageToast = () => {
		dispatch(
			showMessageToast({
				show: false,
				title: "",
				message: "",
			})
		);
	};

	return (
		<>
			<Outlet />
			<MessageToast
				toastState={toastState}
				handleCloseMessageToast={handleCloseMessageToast}
			/>
		</>
	);
}

export default App;
