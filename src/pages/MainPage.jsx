import styled from "styled-components";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(118, 211, 172);
`;

function MainPage() {
  return <Background>환영합니다</Background>;
}

export default MainPage;
