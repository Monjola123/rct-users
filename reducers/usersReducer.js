import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
      name: 'John',
      email: 'john@example.com',
      gen: 1,
      id: 'hiqkosabz828q',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      gen: 5,
      id: 'ncdsuocwasw82wis',
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
