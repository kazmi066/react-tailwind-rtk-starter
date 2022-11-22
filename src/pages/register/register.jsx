import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { errorToast, successToast } from '../../utils';
import { registerUser } from '../../store/auth/authActions';

export const Register = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.auth);
	const [validationError, setValidationError] = useState('');
	let fullName = useRef('');
	let email = useRef('');
	let password = useRef('');

	const signUpUser = (e) => {
		e.preventDefault();
		e.stopPropagation();

		// validation for all fields
		if (
			!fullName.value.trim()
			|| !email.value.trim()
			|| !password.value.trim()
		) {
			setValidationError('All fields are required');
		} else {
			dispatch(registerUser({
				fullName: fullName.value,
				email: email.value,
				password: password.value,
			}))
				.unwrap()
				.then(() => {
					e.target.reset();
					successToast('User Registered Successfully');
				})
				.catch((errorData) => {
					errorToast(errorData.error);
				});
		}
	};

	return (
		<section className="p-8">
			<Toaster />
			<form onSubmit={signUpUser}>
				<div>
					<h1>Sign Up</h1>
					<p className="mt-4 mb-8">If you already have an account registered <br/>
						You can <Link to='/login' className="link">Login here !</Link>
					</p>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Full Name</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="fullName"
							placeholder="Enter your full name"
							id="fullName"
							onChange={() => setValidationError('')}
							ref={(e) => { fullName = e; } }
							type="text"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Email</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="email"
							placeholder="Enter your email"
							id="email"
							onChange={() => setValidationError('')}
							ref={(e) => { email = e; } }
							type="email"
							required />
					</div>
				</div>
				<div>
					<label className="block text-primary-grey text-[13px] font-medium pb-1">Password</label>
					<div className="relative">
						<input
							className="inputField mb-8 w-full"
							name="password"
							placeholder="Enter your password"
							id="password"
							onChange={() => setValidationError('')}
							ref={(e) => { password = e; } }
							type="password"
							required />
					</div>
				</div>
				{validationError && <p className="text-left text-red-500">{validationError}</p>}
				<button type="submit" className="primaryButton">
					{loading ? 'Loading...' : 'Register'}
				</button>
			</form>
		</section>
	);
};
