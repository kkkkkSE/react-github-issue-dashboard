import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './Header';
import Loading from './Loading';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.2rem;
`;
