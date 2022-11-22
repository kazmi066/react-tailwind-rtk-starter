import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../../utils/axiosConfig';

export const registerUser = createAsyncThunk('user/register', async ({
	fullName, email, password
}, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/signup', {
			full_name: fullName,
			user_email: email,
			password
		});

		return await response.data.message;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const loginUser = createAsyncThunk('user/login', async ({
	email, password
}, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.post('/login', {
			email, password
		});

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const verifyUserDetails = createAsyncThunk('user/verify', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get('/verify/user');

		return await response.data;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});

export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosConfig.get('/logout');

		return response.data.message;
	} catch (error) {
		return rejectWithValue({
			error: error.response.data ? error.response.data.message : error.message
		});
	}
});
