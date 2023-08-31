import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from '../stores/hooks';
import issueListSlice from '../stores/issueListSlice';

const useIssueListInfiniteScroll = () => {
  const dispatch = useDispatch();

  const { isLastPage, isLoading, error } = useSelector((state) => state.issueList);

  const targetRef = useRef<HTMLDivElement>(null);

  const observer = new IntersectionObserver(
    ([entry]:IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting) {
        return;
      }
      if (!isLastPage && !isLoading && !error) {
        dispatch(issueListSlice.actions.increasePage());
      }
    },
  );

  useEffect(() => {
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef.current]);

  return {
    targetRef,
  };
};

export default useIssueListInfiniteScroll;
