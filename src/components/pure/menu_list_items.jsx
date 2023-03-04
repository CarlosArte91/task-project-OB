import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, Task } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const getIcon = (icon) => {
	switch (icon) {
		case 'HOME':
			return (<Home />)
		case 'TASKS':
			return (<Task />)
		case 'SETTINGS':
			return (<Settings />)
		default:
			break;
	}
};

function MenuListItems({ list }) {
	const navigate = useNavigate();

	return (
		<List>
			{list.map(({ id, text, path, icon }) => (
				<ListItem
					key={id}
					onClick={() => navigate(path)}
				>
					<ListItemIcon>{getIcon(icon)}</ListItemIcon>
					<ListItemText  primary={text}/>
				</ListItem>
			))}
		</List>
	);
}

export default MenuListItems;
