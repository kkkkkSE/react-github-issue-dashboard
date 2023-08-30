import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <h2>Facebook / React</h2>
    </Container>
  );
}

const Container = styled.div`
  ${(props) => props.theme.alignCenter.horizontal}
  ${(props) => props.theme.texts.bold.header}
`;
