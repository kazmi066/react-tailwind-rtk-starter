import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';

export const Login = () => {
	const { user, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let email = useRef('');
	let password = useRef('');

	useEffect(() => {
		if (user) {
			navigate('/', { successLogin: true });
		}
	}, [navigate, user]);

	const signinUser = async (e) => {
		e.preventDefault();

		dispatch(loginUser({
			email: email.value,
			password: password.value
		}))
			.unwrap()
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	};

	return (
		<section className="p-8">
			<Toaster />
			<form onSubmit={signinUser}>
				<div>
					<h1>Sign In</h1>
					<p className="mt-4 mb-8">If you don't have an account <br/>
						You can <Link to='/register' className="link">Register here !</Link>
					</p>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Email</label>
					<div className="relative">
						<input
							className="inputField w-full mb-8"
							name="email"
							placeholder="Enter your email"
							id="email"
							ref={(e) => { email = e; } }
							type="email"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Password</label>
					<div className="relative">
						<input
							className="inputField w-full mb-8"
							name="password"
							placeholder="Enter your password"
							id="password"
							ref={(e) => { password = e; } }
							type="password"
							required />
					</div>
				</div>
				<button type="submit" className="primaryButton mt-4">
					{loading ? 'Loading...' : 'Login'}
				</button>
			</form>
		</section>
	);
};
