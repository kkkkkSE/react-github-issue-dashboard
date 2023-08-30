/* eslint-disable @typescript-eslint/no-explicit-any */

const filterIssueList = (issueList: any[]) => {
  const filteredIssueList = issueList.map((issue) => ({
    number: issue.number,
    title: issue.title,
    user: issue.user,
    comments: issue.comments,
    created_at: issue.created_at,
    body: issue.body,
  }));

  return filteredIssueList;
};

export default filterIssueList;
