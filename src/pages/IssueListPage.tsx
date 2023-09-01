import ErrorBoundary from '../error-boundary/ErrorBoundary';

import IssueListFetcher from '../fetchers/IssueListFetcher';

import IssueList from '../components/IssueList';

export default function IssueListPage() {
  return (
    <ErrorBoundary>
      <IssueListFetcher>
        <IssueList />
      </IssueListFetcher>
    </ErrorBoundary>
  );
}
