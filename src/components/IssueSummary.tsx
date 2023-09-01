import { styled } from 'styled-components';

import { Issue } from '../types';

import formatIsoDate from '../utils/formatIsoDate';

interface IssueSummaryProps {
  issue: Issue;
}

export default function IssueSummary({
  issue,
}: IssueSummaryProps) {
  return (
    <Container>
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
          {formatIsoDate(issue.created_at)}
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

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
  cursor: pointer;

  h3 {
    ${(props) => props.theme.texts.bold.subTitle}
    line-height: 1.2;
    padding-bottom: .6rem;

    span {
      padding-right: .8rem;
    }
  }

  p {
    ${(props) => props.theme.texts.regular.small}
  }
  
  > div:nth-child(2){
    white-space: nowrap;
  }
`;
