/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react';

import { useDispatch, useSelector } from '../stores/hooks';
import { reset } from '../stores/issueListSlice';

import useIssueListInfiniteScroll from '../hooks/useIssueListInfiniteScroll';

import Loading from '../components/Loading';
import Error from '../components/Error';

export default function IssueListFetcher({ children } : React.PropsWithChildren) {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.issueList);

  const { targetRef } = useIssueListInfiniteScroll();

  useEffect(() => () => {
    if (error) {
      dispatch(reset());
    }
  }, [error]);

  if (error) {
    return (
      <>
        {children}
        <Error error={error} />
      </>
    );
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
