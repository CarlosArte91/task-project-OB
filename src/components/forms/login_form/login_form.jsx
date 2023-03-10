import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function LoginForm() {
	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		password: Yup.string()
			.required("Password is required"),
	});

	const onSubmit = async (values) => {
		await new Promise((r) => setTimeout(r, 500));
		alert(JSON.stringify(values, null, 2));
		localStorage.setItem("credentials", values);
		const data = localStorage.getItem("credentials");
		console.log(values);
	};

	return (
		<div>
			<h4>Login form</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form>
						{isSubmitting ? <p>Login form submited...</p> : null}
						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							placeholder="example@mail.com"
							type="email"
						/>
						{errors.email && touched.email ? <ErrorMessage name="email" /> : null}

						<label htmlFor="password">Password</label>
						<Field
							id="password"
							name="password"
							type="password"
						/>
						{errors.password && touched.password ? <ErrorMessage name="password" /> : null}

						<button type="submit">Login</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
