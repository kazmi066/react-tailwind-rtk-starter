export const Container = ({ children, className }) => {
	return (
		<div className={`md:container mx-auto px-4 h-full ${className}`}>
			{children}
		</div>
	);
};
