import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../posts/posts-api-slice';

type UserState = {
  value: User | undefined
}

const initialState: UserState = {
  value: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn(state, action: PayloadAction<User>) {
      state.value = action.payload;
    }
  }
});

export const { loggedIn } = userSlice.actions;
export default userSlice.reducer;
