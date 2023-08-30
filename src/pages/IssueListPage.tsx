import ErrorBoundary from '../error-boundary/ErrorBoundary';

import IssueList from '../components/IssueList';

export default function IssueListPage() {
  return (
    <ErrorBoundary>
      <IssueList />
    </ErrorBoundary>
  );
}
