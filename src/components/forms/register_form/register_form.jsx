import { ErrorMessage, Field, Form, Formik } from "formik";
import { User } from "../../../models/user.class";
import * as Yup from "yup";
import { ROLES } from "../../../models/role.enum";

function RegisterForm() {
	let user = new User();

	const initialValues = {
		username: "",
		email: "",
		password: "",
		confirm: "",
		role: ROLES.USER
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string()
			.min(6, "Username too short")
			.max(12, "Username too long")
			.required("Username is required"),
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: Yup.string()
			.min(8, "Password too short")
			.required("Password is required"),
		confirm: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password must match")
			.required("You must confirm the password"),
	});

	const onSubmit = async (values) => {
		await new Promise((r) => setTimeout(r, 1000));
		alert(JSON.stringify(values, null, 2));
		console.log(values);
	};

	return (
		<div>
			<h4>Register form</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ touched, errors }) => (
					<Form>
						<div>
							<label htmlFor="username">Username</label>
							<Field
								id="username"
								name="username"
								placeholder="example@mail.com"
								type="text"
							/>
							{errors.username && touched.username ? <ErrorMessage name="username" /> : null}
						</div>

						<div>
							<label htmlFor="email">Email</label>
							<Field
								id="email"
								name="email"
								placeholder="example@mail.com"
								type="email"
							/>
							{errors.email && touched.email ? <ErrorMessage name="email" /> : null}
						</div>

						<div>
							<label htmlFor="password">Password</label>
							<Field
								id="password"
								name="password"
								type="password"
							/>
							{errors.password && touched.password ? <ErrorMessage name="password" /> : null}
						</div>

						<div>
							<label htmlFor="confirm">Confirm password</label>
							<Field
								id="confirm"
								name="confirm"
								type="password"
							/>
							{errors.confirm && touched.confirm ? <ErrorMessage name="confirm" /> : null}
						</div>

						<button type="submit">Register acount</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;
