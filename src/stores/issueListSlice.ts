import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiService } from '../services/ApiService';

import { Issue } from '../types';

import { PER_PAGE } from '../constants/apis';

interface IssueListState {
  issueList: Issue[];
  nextPage: number;
  isLastPage: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: IssueListState = {
  issueList: [],
  nextPage: 1,
  isLastPage: false,
  isLoading: false,
  error: '',
};

const refineIssueList = <T extends Issue>(issueList: T[]) => {
  const refinedIssueList = issueList.map((issue) => ({
    number: issue.number,
    title: issue.title,
    user: issue.user,
    comments: issue.comments,
    created_at: issue.created_at,
    body: issue.body,
  }));

  return refinedIssueList;
};

export const fetchIssueListNextPage = createAsyncThunk(
  'issueList/fetchIssueListNextPage',
  async (page: number, thunkApi) => {
    try {
      const data = await apiService.fetchIssues({ page });

      return data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkApi.rejectWithValue(e.message);
      }

      return thunkApi.rejectWithValue('Network Error');
    }
  },
);

export const issueListSlice = createSlice({
  name: 'issueList',
  initialState,
  reducers: {
    reset: (state) => {
      state.issueList = [];
      state.nextPage = 1;
      state.isLastPage = false;
      state.isLoading = false;
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssueListNextPage.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchIssueListNextPage.fulfilled, (state, action) => {
        const issueListNextPage = refineIssueList(action.payload);

        state.issueList = [...state.issueList, ...issueListNextPage];
        state.nextPage += 1;
        state.isLoading = false;
        state.error = '';

        if (issueListNextPage.length < PER_PAGE) {
          state.isLastPage = true;
        }
      })
      .addCase(fetchIssueListNextPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reset } = issueListSlice.actions;

export default issueListSlice;
