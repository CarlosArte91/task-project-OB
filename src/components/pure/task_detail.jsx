import { useNavigate, useParams } from "react-router-dom";
import { LEVEL } from "../../models/level.enum";
import { Task } from "../../models/task.class";

function TaskDetail() {
	const navigate = useNavigate();
	const { id } = useParams();

	const index = id[id.length - 1]

	console.log(id[id.length - 1]);

	const defaultTask1 = new Task('Example1', 'default description 1', true, LEVEL.NORMAL);
	const defaultTask2 = new Task('Example2', 'default description 2', false, LEVEL.URGENT);
	const defaultTask3 = new Task('Example3', 'default description 3', false, LEVEL.BLOCKING);

	const taskArray = [defaultTask1, defaultTask2, defaultTask3];

	return (
		<div>
			<h2>{taskArray[index - 1].name}</h2>
			<h3>{taskArray[index - 1].description}</h3>
			<button onClick={() => navigate(-1) }>Go Back</button>
		</div>
	);
}

export default TaskDetail;
