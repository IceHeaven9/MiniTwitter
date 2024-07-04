import { useState } from "react";

export const RegisterPage = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		const response = await fetch(
			import.meta.env.VITE_API_URL + `/users/register`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, email, password }),
			}
		);

		const result = await response.json();
		console.log(result);

		if (!response.ok) {
			throw new Error("Registration failed");
		}
	};

	return (
		<section>
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
				<label htmlFor="username" name="username" id="username">
					username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<label htmlFor="email">email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label htmlFor="password">password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button>Enviar</button>
			</form>
		</section>
	);
};
