import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser, verifyUserDetails } from '../../store/auth/authActions';

const Navbar = () => {
	const dispatch = useDispatch();
	const { user, accessToken } = useSelector((state) => state.auth);

	useEffect(() => {
		if (accessToken) {
			dispatch(verifyUserDetails());
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logoutHandler = () => {
		dispatch(logoutUser());
	};

	return (
		<header>
			<div>
				<span>
					{user ? `Logged in as ${user.email}` : "You're not logged in"}
				</span>
				<div>
					{user ? (
						<NavLink onClick={logoutHandler}>
							Logout
						</NavLink>
					) : (
						<NavLink to='/login'>
							Login
						</NavLink>
					)}
				</div>
			</div>
			<nav>
				<ul>
					<li><NavLink to='/'>Home</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export { Navbar };
