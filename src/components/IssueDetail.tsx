import styled from 'styled-components';

import { useSelector } from '../stores/hooks';

import IssueSummary from './IssueSummary';
import Markdown from './Markdown';

export default function IssueDetail() {
  const { issue } = useSelector((state) => state.issueDetail);

  return (
    <Container>
      <div>
        <img src={issue.user.avatar_url} alt={issue.user.login} />
        <IssueSummary issue={issue} />
      </div>

      <Markdown content={issue.body} />
    </Container>
  );
}

const Container = styled.div`
  > div:nth-child(1) {
    display: flex;
    align-items: center;

    img {
      width: 5rem;
      border-radius: 50%;
      margin-right: 1.2rem;
    }
  }
`;
