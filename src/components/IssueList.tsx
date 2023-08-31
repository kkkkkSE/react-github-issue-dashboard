import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

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
    <Container>
      {issueList.map((issue: Issue, index: number) => (
        <>
          <IssueListRow
            key={issue.number}
            issue={issue}
            onClickIssue={handleMoveIssue}
          />

          {isDisplayAD(index) && (
            <AD key={`${issue.number}-ad`} />
          )}
        </>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  padding: 0;
  
  * {
    margin: 0;
  }
  
  li {
    list-style: none;
  }
`;
