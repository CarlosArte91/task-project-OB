import PropTypes from "prop-types";
import { useRef } from "react";
import { LEVEL } from "../../../models/level.enum";
import { Task } from "../../../models/task.class";

function TaskForm({ add }) {
	const nameRef = useRef("");
	const descriptionRef = useRef("");
	const levelRef = useRef(LEVEL.NORMAL);

	const addTask = (event) => {
		event.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value,
		);
		add(newTask);
	};

	return (
		<form
			onSubmit={addTask}
			className='d-flex justify-content-center aling-items-center mb-4'
		>
			<div className='form-outline flex-fill'>
				<input ref={nameRef} id='inputName' type="text" className="form-control form-control-lg" required autoFocus placeholder="Title" />
				<input ref={descriptionRef} id='inputDescription' type="text" className="form-control form-control-lg" required placeholder="Description" />
				<label htmlFor="selectLevel" className="sr-only">Priority</label>
				<select ref={levelRef} defaultValue={LEVEL.NORMAL} id="selectLevel">
					<option value={LEVEL.NORMAL}>Normal</option>
					<option value={LEVEL.URGENT}>Urgent</option>
					<option value={LEVEL.BLOCKING}>Blocking</option>
				</select>
				<input type="submit" value="Add" className="btn btn-success btn-lg ms-2"/>
			</div>
		</form>
	);
}

TaskForm.propTypes = {
	add: PropTypes.func.isRequired
};

export default TaskForm
