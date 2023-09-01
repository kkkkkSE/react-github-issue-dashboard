import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Issue } from '../types';

import ROUTES from '../constants/routes';

import { useSelector } from '../stores/hooks';

import IssueListRow from './IssueListRow';
import AD from './AD';

export default function IssueList() {
  const navigate = useNavigate();

  const { issueList } = useSelector((state) => state.issueList);

  const isDisplayAD = (index: number) => (index - 3) % 4 === 0;

  const handleMoveIssue = (id: number) => {
    navigate(ROUTES.ISSUE(id));
  };

  return (
    <ul>
      {issueList.map((issue: Issue, index: number) => (
        <React.Fragment key={issue.number}>
          <IssueListRow
            issue={issue}
            onClickIssue={handleMoveIssue}
          />

          {isDisplayAD(index) && (
            <AD />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
