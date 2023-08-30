import styled from 'styled-components';

export default function AD() {
  return (
    <Container>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=150" alt="원티드 바로가기" />
      </a>
    </Container>
  );
}

const Container = styled.li`
  a {
    display: block;
    width: 100%;
    min-height: 7rem;
    ${(props) => props.theme.alignCenter.horizontal}
    margin-block: 1.2rem;
    box-shadow: .1rem .1rem .6rem rgba(0, 0, 0, 0.15);
  }
`;
