import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import oauthApi from 'api/oauthApi';
import StorageKeys from 'Constants/storage-keys';

export const login = createAsyncThunk('auth/login', async (payload) => {
  const data = await oauthApi.login(payload);
  localStorage.setItem(StorageKeys.TOKEN, data.access_token);
  // console.log('authSlice', data);
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    current: false,
    // current: localStorage.getItem(StorageKeys.TOKEN) || false,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.TOKEN);
      state.current = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // state.current = action.payload;
      state.current = true;
    },
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;
export default reducer;
