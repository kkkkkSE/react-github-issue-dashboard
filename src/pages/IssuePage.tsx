import { useParams } from 'react-router-dom';

import ErrorBoundary from '../error-boundary/ErrorBoundary';

import Issue from '../components/Issue';

export default function IssuePage() {
  const params = useParams();

  const id = Number(params.id);

  return (
    <ErrorBoundary>
      <Issue id={id} />
    </ErrorBoundary>
  );
}
