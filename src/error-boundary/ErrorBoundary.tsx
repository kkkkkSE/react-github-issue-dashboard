/* eslint-disable react/destructuring-assignment */
import { Component, ReactNode } from 'react';

import Error from '../components/Error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error error="Unexpected Error" />;
    }

    return this.props.children;
  }
}
