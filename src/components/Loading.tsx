import styled from 'styled-components';

export default function Loading() {
  return (
    <Container>
      Loading...
    </Container>
  );
}

const Container = styled.p`
  ${(props) => props.theme.texts.bold.subHeader}
`;
