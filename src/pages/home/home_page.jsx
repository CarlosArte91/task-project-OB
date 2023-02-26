import { useNavigate } from "react-router-dom";
import TaskPage from "../task/task_page";

function HomePage() {
	const navigate = useNavigate();

	return(
		<div>
			<h1>Home page</h1>
			<button onClick={() => navigate('/profile')}>Go to profile</button>
		</div>
	);
}

export default HomePage;
