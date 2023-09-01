import IssueDetailFetcher from '../fetchers/IssueDetailFetcher';

import IssueDetail from '../components/IssueDetail';

export default function IssueDetailPage() {
  return (
    <IssueDetailFetcher>
      <IssueDetail />
    </IssueDetailFetcher>
  );
}
