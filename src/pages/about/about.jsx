import { useLocation, useNavigate } from "react-router-dom";

function About() {
	const navigate = useNavigate();

	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center'}}>
			<h4>About us</h4>
			<p style={{width: '50%'}}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Rerum inventore consequatur ex modi perferendis illo, suscipit ipsa,
				ipsam facere, repellat dolores tempore consequuntur optio maiores
				vero corporis nihil beatae commodi?
			</p>
			<div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
				<button onClick={() => navigate('/')}>Go to home</button>
				<button onClick={() => navigate(-1) }>Go Back</button>
			</div>
		</div>
	);
}

export default About;
