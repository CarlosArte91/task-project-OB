import React from "react";
import PropTypes from "prop-types";
import { LEVEL } from "../../models/level.enum";
import { Task } from "../../models/task.class";

// Importar hoja de estilos
import '../../styles/task.scss';

function TaskComponent({ task }) {

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
		return task.completed ? <i className='bi-toggle-on' style={{color: 'green'}}></i> : <i className='bi-toggle-off'></i>
	};

  return (
		<tr className="fw-normal">
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
				<i className='bi-trash' style={{color: 'tomato'}}></i>
			</td>
		</tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
