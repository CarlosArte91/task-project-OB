import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVEL } from '../../models/level.enum';
import TaskComponent from '../pure/task';

// Importar hoja de estilos
import '../../styles/task.scss';
import TaskForm from '../pure/forms/task_form';

function TaskList() {
  const defaultTask1 = new Task('Example 1', 'default description 1', true, LEVEL.NORMAL);
	const defaultTask2 = new Task('Example 2', 'default description 2', false, LEVEL.URGENT);
	const defaultTask3 = new Task('Example 3', 'default description 3', false, LEVEL.BLOCKING);

	const taskArray = [defaultTask1, defaultTask2, defaultTask3];

	const [tasks, setTasks] = useState(taskArray);
	const [loading, setLoading] = useState(true);

	const completeTask = (task) => {
		const index = tasks.indexOf(task);
		const tempTasks = [...tasks];
		tempTasks[index].completed = !tempTasks[index].completed;
		setTasks(tempTasks);
	};

	const deleteTask = (task) => {
		const tempTasks = tasks.filter((item) => item !== task);
		setTasks(tempTasks);
	};

	const addTask = (task) => {
		const tempTasks = [...tasks];
		tempTasks.push(task)
		setTasks(tempTasks);
	};

	// Componentes de renderizado condicional
	const Table = () => {
		return (
			<table>
				<thead>
					<tr>
						<th scope='col'>Title</th>
						<th scope='col'>Description</th>
						<th scope='col'>Level</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>

				<tbody>
					{tasks.map((task, index) => <TaskComponent key={index} task={task} complete={completeTask} deleted={deleteTask} />)}
				</tbody>
			</table>
		);
	};

	let taskTable;

	if (tasks.length) taskTable = <Table />
	else taskTable = (
		<div>
			<h3>There are not tasks to show</h3>
			<h4>Please, create one</h4>
		</div>
	);

	useEffect(() => {
		const timeOut = setTimeout(() => setLoading(false), 2000);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

  return (
    <div>
			<div className='col-12'>
				<div className='card'>
					<div className='card-header p-3'>
						<h5>Your Task:</h5>
					</div>

					<div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
						{loading ? <p className='loading-style'>Loading tasks...</p> : taskTable}
					</div>
				</div>
			</div>
			<TaskForm add={addTask} length={tasks.length}/>
    </div>
  );
};

export default TaskList;
