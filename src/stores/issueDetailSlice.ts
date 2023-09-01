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
  error: string;
}

const initialState: IssueDetailState = {
  issue: initailIssue,
  isLoading: false,
  error: '',
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
  async (id: number, thunkApi) => {
    try {
      const data = await apiService.fetchIssue({ id });

      return data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue('Network Error');
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
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssue.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchIssue.fulfilled, (state, action) => {
        state.issue = refineIssue(action.payload);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchIssue.rejected, (state, action) => {
        state.issue = initailIssue;
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reset } = issueDetailSlice.actions;

export default issueDetailSlice;
