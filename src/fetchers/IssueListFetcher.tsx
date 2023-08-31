/* eslint-disable react/jsx-no-useless-fragment */

import { useEffect } from 'react';

import { useDispatch, useSelector } from '../stores/hooks';
import { fetchIssueListNextPage } from '../stores/issueListSlice';

import useIssueListInfiniteScroll from '../hooks/useIssueListInfiniteScroll';

import Loading from '../components/Loading';

export default function IssueListFetcher({ children } : React.PropsWithChildren) {
  const dispatch = useDispatch();

  const { page, isLoading, error } = useSelector((state) => state.issueList);

  const { targetRef } = useIssueListInfiniteScroll();

  useEffect(() => {
    dispatch(fetchIssueListNextPage(page));
  }, [page]);

  if (error) {
    throw new Error();
  }

  if (isLoading) {
    return (
      <>
        {children}
        <Loading />
        <div ref={targetRef} />
      </>
    );
  }

  return (
    <>
      {children}
      <div ref={targetRef} />
    </>
  );
}
