/* eslint-disable react/jsx-no-useless-fragment */

import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from '../stores/hooks';
import { fetchIssue, reset } from '../stores/issueDetailSlice';

import Loading from '../components/Loading';

export default function IssueDetailFetcher({ children } : React.PropsWithChildren) {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.issueDetail);

  const params = useParams();

  const id = Number(params.id);

  useEffect(() => {
    dispatch(fetchIssue(id));

    return () => {
      dispatch(reset);
    };
  }, []);

  if (error) {
    throw new Error();
  }

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
