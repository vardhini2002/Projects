import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers:{
        saveUser: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
})

export const {saveUser, logout} = authSlice.actions;
export default authSlice.reducer;
