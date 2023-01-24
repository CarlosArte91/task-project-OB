import logo from './logo.svg';
import './App.css';
import TaskList from './components/container/task_list';
import GreetingStyles from './components/pure/greeting_styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskList /> */}
				<GreetingStyles name="Carlos" />
      </header>
    </div>
  );
}

export default App;
