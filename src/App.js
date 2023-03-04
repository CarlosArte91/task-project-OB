import { BrowserRouter, Navigate, redirect, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/login_form/login_form';
import NotFoundPage from './pages/404/not_found_page';
import DashBoard from './pages/dashboard/dashboard';

function App() {
	const logged = true;

  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={logged ? <Navigate to={'/dashboard'} /> :  <Navigate to={'/login'} />}
					/>

					<Route
						path='/dashboard'
						element={logged ? <DashBoard /> :  <Navigate to={'/login'} />}
					/>

					<Route path='/login' element={<LoginForm />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
