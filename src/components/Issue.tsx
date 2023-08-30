/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Markdown from 'markdown-to-jsx';

import filterIssue from '../utils/filterIssue';
import formatDate from '../utils/formatDate';

import { apiService } from '../services/ApiService';

import { Issue, nullIssue } from '../types';

interface IssueProps {
  id: number;
}

export default function Issue({
  id,
}: IssueProps) {
  const [issue, setIssue] = useState<Issue>(nullIssue);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchIssue = async () => {
      try {
        const data = await apiService.fetchIssue({ id });

        setIssue(data);
      } catch (e) {
        setError(true);
      }
    };

    fetchIssue();
  }, []);

  const filteredIssue = filterIssue(issue);

  if (error) {
    throw Error();
  }

  return (
    <>
      <IssueHeader>
        <div>
          <img src={filteredIssue.user.avatar_url} alt={filteredIssue.user.login} />
        </div>
        <div>
          <b>
            <span>
              [#
              {filteredIssue.number}
              ]
            </span>
            {filteredIssue.title}
          </b>
          <p>
            작성자:
            {' '}
            {filteredIssue.user.login}
            , 작성일:
            {' '}
            {formatDate(filteredIssue.created_at)}
          </p>
        </div>
        <div>
          <p>
            코멘트:
            {' '}
            {filteredIssue.comments}
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
