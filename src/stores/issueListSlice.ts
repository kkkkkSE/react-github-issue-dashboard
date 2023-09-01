import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiService } from '../services/ApiService';

import { Issue } from '../types';

import { PER_PAGE } from '../constants/apis';

interface IssueListState {
  issueList: Issue[];
  page: number;
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
  async (page: number) => {
    try {
      const data = await apiService.fetchIssues({ page });

      return data;
    } catch (e) {
      throw new Error();
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
        const issueListNextPage = refineIssueList(action.payload);

        state.issueList = [...state.issueList, ...issueListNextPage];
        state.isLoading = false;
        state.error = false;

        if (issueListNextPage.length < PER_PAGE) {
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
