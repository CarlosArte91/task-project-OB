import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/login_form/login_form';
import RegisterForm from './components/forms/register_form/register_form';
import TaskDetail from './components/pure/task_detail';
import NotFoundPage from './pages/404/not_found_page';
import About from './pages/about/about';
import HomePage from './pages/home/home_page';
import ProfilePage from './pages/profile/profile_page';
import TaskPage from './pages/task/task_page';

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<div style={{display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px'}}>
					<Link to={'/'}><span>Home</span></Link>
					<Link to={'/about'}><span>About</span></Link>
					<Link to={'/login'}><span>Login</span></Link>
					<Link to={'/404'}><span>404</span></Link>
				</div>

				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<LoginForm />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/task' element={<TaskPage />} />
					<Route path='/task/:id' element={<TaskDetail />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
