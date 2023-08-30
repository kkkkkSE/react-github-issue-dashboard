import styled from 'styled-components';

export default function Error() {
  return (
    <Container>
      Error!
    </Container>
  );
}

const Container = styled.p`
  ${(props) => props.theme.texts.bold.header}
  text-align: center;
`;
