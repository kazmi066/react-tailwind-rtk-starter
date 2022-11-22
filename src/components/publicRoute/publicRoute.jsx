import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Navbar } from '../navbar';

export const PublicRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<Navbar />
			{
				user && props.restricted
					? <Navigate to={{ pathname: '/', state: { from: props.location } }} replace />
					: <Component {...props} />
			}
		</>
	);
};
