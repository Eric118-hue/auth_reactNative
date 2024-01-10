import { createSlice } from '@reduxjs/toolkit'
import { Login, Logout } from './authActions';
import { User } from '../@types/types';

export type initial = {
    authToken: string | null;
    success: boolean,
    loading: boolean,
    user: User | null,
    error: any
}

const initialState: initial = {
    authToken: null,
    success: false,
    loading: false,
    user: null,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.loading = true;
            })
            .addCase(Login.fulfilled, (state, {payload}) => {
                state.error = null
                state.loading = false;
                state.success = true;
                state.authToken = payload?.token

            })
            .addCase(Login.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(Logout.fulfilled, (state) => {
                state.authToken = null;
            });
    },
})


export const selectUserToken = (state: any) => state.auth.authToken;

export default authSlice.reducer
