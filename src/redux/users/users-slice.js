import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers, toggleFollowingUsers } from "./users-operations";

const initialState = {
  items: [],
  following: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    togglePayload(store, { payload }) {
      const index = store.following.findIndex(({ id }) => id === payload.id);
      if (index !== -1) {
        store.following.splice(index, 1);
      } else {
        store.following.push(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(...payload);
        store.following.push(
          ...payload.filter(({ isFollowing }) => isFollowing)
        );
      })
      .addCase(fetchUsers.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(toggleFollowingUsers.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(toggleFollowingUsers.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        usersSlice.caseReducers.togglePayload(store, { payload });
      })
      .addCase(toggleFollowingUsers.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default usersSlice.reducer;
