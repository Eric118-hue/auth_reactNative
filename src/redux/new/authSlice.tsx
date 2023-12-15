import { createSlice } from '@reduxjs/toolkit'
import { Login } from './authActions';
import { User } from '../../@types/types';

type initial = {
    authToken: string | null;
    success: boolean,
    loading: boolean,
    user: User | null
}

const initialState: initial = {
    authToken: null,
    success: false,
    loading: false,
user: null
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
                state.loading = true;
                state.success = true;
                state.authToken = payload?.token
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
})

export const selectUserToken = (state: any) => state.auth.authToken;

export default authSlice.reducer