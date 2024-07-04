import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useContext(AuthContext);
	console.log(token);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				import.meta.env.VITE_API_URL + `/users/login`,

				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				}
			);

			if (!response.ok) {
				throw new Error("Login failed");
			}

			const body = await response.json();
			setToken(body.data.token);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onClick={handleSubmit}>
				<label>
					Email:
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};
