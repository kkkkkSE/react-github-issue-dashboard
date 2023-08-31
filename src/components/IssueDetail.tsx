import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'property-information';

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

      <IssueBody className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </IssueBody>
    </>
  );
}

const IssueHeader = styled.div`
  display: flex;
  align-items: center;
  padding-block: 0.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray300};

  img {
    width: 5rem;
    border-radius: 50%;
  }

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

  > div:nth-child(2) {
    flex-grow: 1;
    padding-inline: 1.4rem;
  }

  > div:nth-child(3) {
    white-space: nowrap;
  }
`;

const IssueBody = styled.div`
  padding-block: 2rem;
  
  ul {
    padding-left: 2rem;
  }
  
  li {
    list-style: circle;
  }
`;
