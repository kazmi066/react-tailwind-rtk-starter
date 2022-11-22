import toast from 'react-hot-toast';

export const successToast = (message) => {
	toast.success(message, {
		style: {
			background: '#333',
			color: '#fff',
		},
	});
};

export const errorToast = (message) => {
	toast.error(message, {
		style: {
			background: '#333',
			color: '#fff',
		},
	});
};
