import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../navbar';

const PrivateRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<Navbar />
			{
				!user
					? <Navigate to={{ pathname: '/login', state: { from: props.location } }} replace />
					: <Component {...props} />
			}
		</>
	);
};

export { PrivateRoute };
