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
    margin-bottom: .8rem;
    padding: 1.2rem 1.8rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.gray300};

    img {
      width: 5rem;
      border-radius: 50%;
    }
  }
`;
