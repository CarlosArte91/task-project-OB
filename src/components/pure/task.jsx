import React from "react";
import PropTypes from "prop-types";
import { LEVEL } from "../../models/level.enum";
import { Task } from "../../models/task.class";

// Importar hoja de estilos
import '../../styles/task.scss';

function TaskComponent({ task, complete, deleted }) {

	const taskLevelBadge = () => {
		switch (task.level) {
			case LEVEL.NORMAL:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-primary'>
							{task.level}
						</span>
					</h6>
				);

			case LEVEL.URGENT:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-warning'>
							{task.level}
						</span>
					</h6>
				);

			case LEVEL.BLOCKING:
				return (
					<h6 className='mb-0'>
						<span className='badge bg-danger'>
							{task.level}
						</span>
					</h6>
				);

			default:
				break;
		};
	};

	const taskIconCompleted = () => {
		return task.completed ? (
			<i onClick={() => complete(task)} className='bi-toggle-on task-action'></i>
		) : <i onClick={() => complete(task)} className='bi-toggle-off task-action'></i>
	};

  return (
		<tr className={`fw-normal ${task.completed ? "task-completed" : "task-pending"}`}>
			<th>
				<span className='ms-2' >{ task.name }</span>
			</th>

			<td className='aling-middle'>
				<span>{ task.description }</span>
			</td>

			<td className='aling-middle'>
				{taskLevelBadge()}
			</td>

			<td className='aling-middle'>
				{ taskIconCompleted() }
				<i onClick={() => deleted(task)} className='bi-trash task-action-delete'></i>
			</td>
		</tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	deleted: PropTypes.func.isRequired,
};

export default TaskComponent;
