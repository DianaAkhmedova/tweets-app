import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllUsers, toggleFollowing } from "../../shared/services/users";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (data, thunkAPI) => {
    try {
      const result = await getAllUsers(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const toggleFollowingUsers = createAsyncThunk(
  "users/toggleFollowing",
  async (data, thunkAPI) => {
    try {
      const result = await toggleFollowing(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
