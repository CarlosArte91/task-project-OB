import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import Copyright from '../../components/pure/copyright';
import MenuListItems from '../../components/pure/menu_list_items';

const list = [
	{
		id: 1,
		text: "Home",
		icon: "HOME",
		path: "/home",
	},
	{
		id: 2,
		text: "Tasks",
		icon: "TASKS",
		path: "/tasks",
	},
	{
		id: 3,
		text: "Settings",
		icon: "SETTINGS",
		path: "/404",
	}
];

function DashBoard() {
	const navigate = useNavigate();

	return (
		<div>
			<MenuListItems list={list}/>
			<Button variant="contained" color="primary" onClick={() => navigate("/login")}>
				Logout
			</Button>
			<Copyright />
		</div>
	);
}

export default DashBoard;
