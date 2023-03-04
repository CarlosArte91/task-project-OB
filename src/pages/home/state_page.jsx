import { useLocation } from "react-router-dom";

function StatePage() {
	const location = useLocation();

	console.log(location.state.online);
	console.log(location.search);

	return (
		<div>
			<h2>State online: {location.state.online}</h2>
		</div>
	);
}

export default StatePage;


// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import './App.css';
// import LoginForm from './components/forms/login_form/login_form';
// import RegisterForm from './components/forms/register_form/register_form';
// import ProtectedRoute from './components/pure/protected_route';
// import TaskDetail from './components/pure/task_detail';
// import NotFoundPage from './pages/404/not_found_page';
// import About from './pages/about/about';
// import HomePage from './pages/home/home_page';
// import StatePage from './pages/home/state_page';
// import ProfilePage from './pages/profile/profile_page';
// import TaskPage from './pages/task/task_page';

// function App() {
// 	const logged = true;

//   return (
//     <div className="App">
// 			<BrowserRouter>
// 				<div style={{display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px'}}>
// 					<Link to={'/'}><span>Home</span></Link>
// 					<Link to={'/about'}><span>About</span></Link>
// 					<Link to={'/login'}><span>Login</span></Link>
// 					<Link to={'/404'}><span>404</span></Link>
// 				</div>

// 				<Routes>
// 					<Route path='/state-page' element={<StatePage />} />
// 					<Route path='/' element={<HomePage />} />
// 					<Route path='/login' element={<LoginForm />} />

// 					<Route
// 						path='/about'
// 						element={
// 							<ProtectedRoute logged={logged}>
// 								<About />
// 							</ProtectedRoute>
// 						}
// 					/>

// 					<Route element={<ProtectedRoute logged={logged}/>}>
// 						<Route path='/profile' element={<ProfilePage />} />
// 						<Route path='/task' element={<TaskPage />} />
// 						<Route path='/task/:id' element={<TaskDetail />} />
// 					</Route>

// 					<Route path='*' element={<NotFoundPage />} />
// 				</Routes>
// 			</BrowserRouter>
//     </div>
//   );
// }

// export default App;

