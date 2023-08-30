import { Issue } from '../types';

const filterIssue = <T extends Issue>(issue: T) => {
  const filteredIssue = {
    number: issue.number,
    title: issue.title,
    user: issue.user,
    comments: issue.comments,
    created_at: issue.created_at,
    body: issue.body,
  };

  return filteredIssue;
};

export default filterIssue;
