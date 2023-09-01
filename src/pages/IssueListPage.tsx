import IssueListFetcher from '../fetchers/IssueListFetcher';

import IssueList from '../components/IssueList';

export default function IssueListPage() {
  return (
    <IssueListFetcher>
      <IssueList />
    </IssueListFetcher>
  );
}
