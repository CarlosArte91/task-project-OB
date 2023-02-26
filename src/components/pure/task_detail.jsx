import { useNavigate, useParams } from "react-router-dom";

function TaskDetail() {
	const navigate = useNavigate();
	const { id } = useParams();

	console.log(id);

	return (
		<div>
			<h2>name</h2>
			<button onClick={() => navigate(-1) }>Go Back</button>
		</div>
	);
}

export default TaskDetail;
