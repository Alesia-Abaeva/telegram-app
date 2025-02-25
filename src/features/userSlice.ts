import { createSlice } from "@reduxjs/toolkit";

type UserStore = {
  user: {
    value: string | null;
  };
};

const initialState = {
  value: null,
};

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = useSlice.actions;

export const selectUser = (state: UserStore) => state.user.value;

export default useSlice.reducer;
