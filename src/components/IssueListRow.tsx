import styled from 'styled-components';
import { Issue } from '../types';

interface IssueListRowProps {
  issue: Issue;
  onClickIssue: (id: number) => void;
}

export default function IssueListRow({
  issue, onClickIssue,
}: IssueListRowProps) {
  return (
    <Container onClick={() => onClickIssue(issue.number)}>
      <div>
        <h3>
          <span>
            [#
            {issue.number}
            ]
          </span>
          {issue.title}
        </h3>
        <p>
          작성자:
          {' '}
          {issue.user.login}
          , 작성일:
          {' '}
          {issue.created_at}
        </p>
      </div>
      <div>
        <p>
          코멘트:
          {' '}
          {issue.comments}
        </p>
      </div>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
  cursor: pointer;
  
  &:nth-last-child(){
    border: none;
  }

  h3 {
    ${(props) => props.theme.texts.bold.subTitle}

    span {
      padding-right: .8rem;
    }
  }
`;