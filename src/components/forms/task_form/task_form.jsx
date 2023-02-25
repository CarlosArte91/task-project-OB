import { LEVEL } from "../../../models/level.enum";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Task } from "../../../models/task.class";
import PropTypes from "prop-types";

function TaskForm({ add, length }) {
	const initialValues = {
		name: "",
		description: "",
		level: LEVEL.NORMAL,
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required("name is required"),
		description: Yup.string()
			.min(10, "description is too short")
			.required("description is required"),
	});

	const onSubmit = (values) => {
		const newTask = new Task(
			values.name,
			values.description,
			false,
			values.level
		);
		add(newTask);
	};

	return (
		<div>
			<h4>Create a new task</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, handleChange }) => (
					<Form
						className='d-flex flex-column'
					>
						<div className='form-outline flex-fill'>
							<div>
								<Field
									className="form-control form-control-lg"
									name="name"
									placeholder="Title"
									type="text"
								/>
								{errors.name && touched.name ? <ErrorMessage name="name" /> : null}
							</div>

							<div>
								<Field
									className="form-control form-control-lg"
									name="description"
									placeholder="Description"
									type="text"
								/>
								{errors.description && touched.description ? <ErrorMessage name="description" /> : null}
							</div>

							<div>
								<select
									className="form-control form-control-lg"
									name="level"
									onChange={handleChange}
								>
									<option value={LEVEL.NORMAL}>{LEVEL.NORMAL}</option>
									<option value={LEVEL.URGENT}>{LEVEL.URGENT}</option>
									<option value={LEVEL.BLOCKING}>{LEVEL.BLOCKING}</option>
								</select>
							</div>

							<input
								type="submit"
								value={length ? "Add new task" : "Create first task"}
								className="btn btn-success btn-lg ms-2"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
}

TaskForm.propTypes = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};

export default TaskForm;
