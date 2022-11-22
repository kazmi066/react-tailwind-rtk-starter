import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { injectStore } from '../utils/axiosConfig';

const store = configureStore({
	reducer: {
		auth: authReducer
	}
});

injectStore(store);

export default store;
