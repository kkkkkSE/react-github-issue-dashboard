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

  const isShowAD = ({ index, frequency }:{
    index: number;
    frequency: number;
  }) => (index - (frequency - 1)) % frequency === 0;

  const goToIssueDetail = (id: number) => {
    navigate(ROUTES.ISSUE(id));
  };

  return (
    <ul>
      {issueList.map((issue: Issue, index: number) => (
        <React.Fragment key={issue.number}>
          <IssueListRow
            issue={issue}
            goToIssueDetail={goToIssueDetail}
          />

          {isShowAD({ index, frequency: 4 }) && (
            <AD />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
