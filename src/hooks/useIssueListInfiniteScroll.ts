/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import { apiService } from '../services/ApiService';

import filterIssueList from '../utils/filterIssueList';

const useIssueListInfiniteScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const [issueList, setIssueList] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const observer = new IntersectionObserver(
    ([entry]:IntersectionObserverEntry[]) => {
      if (!entry.isIntersecting) return;

      const fetchIssueList = async () => {
        const data = await apiService.fetchIssues({ page });

        setIssueList((prev) => [...prev, ...data]);
        setPage((prev) => prev + 1);
      };

      fetchIssueList();
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

  const filteredIssueList = filterIssueList(issueList);

  return {
    targetRef,
    issueList: filteredIssueList,
  };
};

export default useIssueListInfiniteScroll;
