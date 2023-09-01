import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiService } from '../services/ApiService';

import { Issue } from '../types';

const initailIssue = {
  number: 0,
  title: '',
  user: {
    login: '',
    avatar_url: '',
  },
  comments: 0,
  created_at: '',
  body: '',
};

interface IssueDetailState {
  issue: Issue;
  isLoading: boolean;
  error: boolean;
}

const initialState: IssueDetailState = {
  issue: initailIssue,
  isLoading: false,
  error: false,
};

const refineIssue = <T extends Issue>(issue: T) => {
  const refinedIssue = {
    number: issue.number,
    title: issue.title,
    user: issue.user,
    comments: issue.comments,
    created_at: issue.created_at,
    body: issue.body,
  };

  return refinedIssue;
};

export const fetchIssue = createAsyncThunk(
  'issueDetail/fetchIssue',
  async (id: number) => {
    try {
      const data = await apiService.fetchIssue({ id });

      return data;
    } catch (e) {
      throw new Error();
    }
  },
);

export const issueDetailSlice = createSlice({
  name: 'issueDetail',
  initialState,
  reducers: {
    reset: (state) => {
      state.issue = initailIssue;
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
        state.issue = refineIssue(action.payload);
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchIssue.rejected, (state) => {
        state.issue = initailIssue;
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { reset } = issueDetailSlice.actions;

export default issueDetailSlice;
