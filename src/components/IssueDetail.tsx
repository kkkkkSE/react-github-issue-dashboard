import styled from 'styled-components';

import Markdown from 'markdown-to-jsx';

import formatDate from '../utils/formatDate';

import { useSelector } from '../stores/hooks';

export default function IssueDetail() {
  const { issue } = useSelector((state) => state.issueDetail);

  return (
    <>
      <IssueHeader>
        <div>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
        </div>
        <div>
          <b>
            <span>
              [#
              {issue.number}
              ]
            </span>
            {issue.title}
          </b>
          <p>
            작성자:
            {' '}
            {issue.user.login}
            , 작성일:
            {' '}
            {formatDate(issue.created_at)}
          </p>
        </div>
        <div>
          <p>
            코멘트:
            {' '}
            {issue.comments}
          </p>
        </div>
      </IssueHeader>

      <IssueBody>
        <Markdown>{issue.body}</Markdown>
      </IssueBody>
    </>
  );
}

const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  padding-block: .8rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};

  * {
    margin: 0;
  }

  img {
    width: 5rem;
    border-radius: 50%;
  }

  b {
    ${(props) => props.theme.texts.bold.subTitle}
  }

  > div:nth-child(2) {
    flex-grow: 1;
    padding-inline: 1.4rem;
  }

  > div:nth-child(3) {
    white-space: nowrap;
  }
`;

const IssueBody = styled.div`
  ul {
    padding-left: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
  }

  pre {
    overflow-x: scroll;
    background-color: ${(props) => props.theme.colors.gray50};
    padding: 2rem;
    border-radius: 1rem;
  }
`;
