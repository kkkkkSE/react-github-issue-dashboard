import { Issue } from '../types';

import IssueSummary from './IssueSummary';

interface IssueListRowProps {
  issue: Issue;
  goToIssueDetail: (id: number) => void;
}

export default function IssueListRow({
  issue, goToIssueDetail,
}: IssueListRowProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => goToIssueDetail(issue.number)}
      onKeyDown={(event) => event.key === 'Enter' && goToIssueDetail(issue.number)}
    >
      <IssueSummary issue={issue} />
    </div>
  );
}
