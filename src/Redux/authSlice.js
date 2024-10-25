import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = '';
      state.password = '';
    },
  },
});

export const { setEmail, setPassword, login, logout } = authSlice.actions;

export default authSlice.reducer;
