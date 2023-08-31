import { configureStore } from '@reduxjs/toolkit';

import issueDetailSlice from './issueDetailSlice';
import issueListSlice from './issueListSlice';

const store = configureStore({
  reducer: {
    issueDetail: issueDetailSlice.reducer,
    issueList: issueListSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
