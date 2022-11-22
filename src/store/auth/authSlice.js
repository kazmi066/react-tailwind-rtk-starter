import { createSlice } from '@reduxjs/toolkit';
import {
	loginUser, logoutUser, registerUser, verifyUserDetails
} from './authActions';

const userAccessToken = localStorage.getItem('userAccessToken')
	? localStorage.getItem('userAccessToken')
	: null;

const initialState = {
	loading: false,
	user: null,
	accessToken: userAccessToken,
	error: null,
	success: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.access_token;

			localStorage.setItem('userAccessToken', action.payload.access_token);
		}
	},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.message;
			state.error = null;
			state.success = true;
		},
		[registerUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[loginUser.pending]: (state) => {
			state.loading = true;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user;
			state.accessToken = action.payload.access_token;
			localStorage.setItem('userAccessToken', action.payload.access_token);
			state.error = null;
		},
		[loginUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[logoutUser.pending]: (state) => {
			state.loading = true;
		},
		[logoutUser.fulfilled]: (state) => {
			state.loading = false;
			state.user = null;
			state.accessToken = null;
			localStorage.removeItem('userAccessToken');
			state.success = true;
			state.error = null;
		},
		[logoutUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},

		[verifyUserDetails.pending]: (state) => {
			state.loading = true;
		},
		[verifyUserDetails.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.user_details;
			state.error = null;
		},
		[verifyUserDetails.rejected]: (state) => {
			state.loading = false;
		}
	},
});

export default authSlice.reducer;

export const { setCredentials } = authSlice.actions;
