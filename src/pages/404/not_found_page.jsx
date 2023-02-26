import { useNavigate } from "react-router-dom";

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>404 - Page not found</h1>
			<div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
				<button onClick={() => navigate('/')}>Go to home</button>
				<button onClick={() => navigate(-1) }>Go Back</button>
			</div>
		</div>
	);
}

export default NotFoundPage;
