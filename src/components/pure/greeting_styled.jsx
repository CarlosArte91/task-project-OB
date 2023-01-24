import { useState } from "react";

// Definiendo estilos en constantes
const loggedStyle = {
	color: 'yellowgreen'
}

const unLoggedStyle = {
	color: 'tomato',
	fontWeight: 'bold'
}

function GreetingStyles(props) {
	const [logged, setLogged] = useState(false);

	const greetingUser = () => (<p>Hola, {props.name}</p>);
	const pleaseLogin = () => (<p>Please, login</p>);

	const saludo = (
		<div>
			<p>Hola</p>
			<h4>amigos</h4>
		</div>
	);

	return (
		<div style={logged ? loggedStyle : unLoggedStyle}>
			{logged ? greetingUser() : pleaseLogin()}
			{saludo}
			<button onClick={() => setLogged(!logged)}>
				{logged ? 'Logout' : 'Login'}
			</button>
		</div>
	);
};

export default GreetingStyles;
