import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/users-slice";
import filterReducer from "./filter/filter-slice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});

export default store;
