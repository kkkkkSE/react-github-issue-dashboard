import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiService } from '../services/ApiService';

import { Issue, nullIssue } from '../types';

import filterIssue from '../utils/filterIssue';

interface IssueDetailState {
  issue: Issue;
  isLoading: boolean;
  error: boolean;
}

const initialState: IssueDetailState = {
  issue: nullIssue,
  isLoading: false,
  error: false,
};

export const fetchIssue = createAsyncThunk(
  'issueDetail/fetchIssue',
  async (id: number) => {
    try {
      const data = await apiService.fetchIssue({ id });

      return data;
    } catch (e) {
      throw Error();
    }
  },
);

export const issueDetailSlice = createSlice({
  name: 'issueDetail',
  initialState,
  reducers: {
    reset: (state) => {
      state.issue = nullIssue;
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssue.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchIssue.fulfilled, (state, action) => {
        state.issue = filterIssue(action.payload);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchIssue.rejected, (state) => {
        state.issue = nullIssue;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { reset } = issueDetailSlice.actions;

export default issueDetailSlice;
