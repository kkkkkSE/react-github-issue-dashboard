import styled, { keyframes } from 'styled-components';

export default function Loading() {
  return (
    <Container>
      <div />
    </Container>
  );
}

const rotation = keyframes`
  from{
      transform: rotate(0deg);
  }

  to{
      transform: rotate(360deg);
  }
`;

const Container = styled.div`
  padding-block: 4rem;

  div {
    height: 30px;
    width: 30px;
    border: .2rem solid ${(props) => props.theme.colors.gray700};
    border-radius: 50%;
    border-top: none;
    border-right: none;
    margin: 16px auto;
    animation: ${rotation} 1s linear infinite;  
  }
`;
