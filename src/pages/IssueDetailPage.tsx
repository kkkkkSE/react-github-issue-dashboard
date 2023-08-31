import ErrorBoundary from '../error-boundary/ErrorBoundary';

import IssueDetailFetcher from '../fetchers/IssueDetailFetcher';

import IssueDetail from '../components/IssueDetail';

export default function IssueDetailPage() {
  return (
    <ErrorBoundary>
      <IssueDetailFetcher>
        <IssueDetail />
      </IssueDetailFetcher>
    </ErrorBoundary>
  );
}
