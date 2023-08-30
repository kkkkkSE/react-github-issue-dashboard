import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Issue } from '../types';

import ROUTES from '../constants/routes';

import useIssueListInfiniteScroll from '../hooks/useIssueListInfiniteScroll';

import IssueListRow from './IssueListRow';
import AD from './AD';

export default function IssueList() {
  const navigate = useNavigate();

  const { targetRef, issueList, error } = useIssueListInfiniteScroll();

  const isDisplayAD = (index: number) => (index - 3) % 4 === 0;

  const handleMoveIssue = (id: number) => {
    navigate(ROUTES.ISSUE(id));
  };

  if (error) {
    throw Error();
  }

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

      <div ref={targetRef} />
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
