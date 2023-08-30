import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { apiService } from '../services/ApiService';

import { Issue as IssueType, nullIssue } from '../types';

import filterIssue from '../utils/filterIssue';

import Issue from '../components/Issue';

export default function IssuePage() {
  const params = useParams();

  const id = Number(params.id);

  const [issue, setIssue] = useState<IssueType>(nullIssue);

  useEffect(() => {
    const fetchIssue = async () => {
      const data = await apiService.fetchIssue({ id });

      setIssue(data);
    };

    fetchIssue();
  }, []);

  const filteredIssue = filterIssue(issue);

  return (
    <Issue issue={filteredIssue} />
  );
}
