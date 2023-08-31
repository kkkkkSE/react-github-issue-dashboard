import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiService } from '../services/ApiService';

import { Issue } from '../types';

import filterIssueList from '../utils/filterIssueList';

interface IssueListState {
  issueList: Issue[];
  page: number,
  isLastPage: boolean;
  isLoading: boolean;
  error: boolean;
}

const initialState: IssueListState = {
  issueList: [],
  page: 1,
  isLastPage: false,
  isLoading: false,
  error: false,
};

export const fetchIssueListNextPage = createAsyncThunk(
  'issueList/fetchIssueListNextPage',
  async (page: number) => {
    try {
      const data = await apiService.fetchIssues({ page });

      return data;
    } catch (e) {
      throw Error();
    }
  },
);

export const issueListSlice = createSlice({
  name: 'issueList',
  initialState,
  reducers: {
    increasePage: (state) => {
      state.page += 1;
    },
    reset: (state) => {
      state.issueList = [];
      state.isLoading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssueListNextPage.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchIssueListNextPage.fulfilled, (state, action) => {
        const issueListNextPage = filterIssueList(action.payload);

        state.issueList = [...state.issueList, ...issueListNextPage];
        state.isLoading = false;
        state.error = false;

        if (issueListNextPage.length === 0) {
          state.isLastPage = true;
        }
      })
      .addCase(fetchIssueListNextPage.rejected, (state) => {
        state.issueList = [];
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { increasePage, reset } = issueListSlice.actions;

export default issueListSlice;
