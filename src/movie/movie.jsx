import styled from "styled-components";

export default function Poster() {
  const Path =
    "https://image.tmdb.org/t/p/original/867fee86b2e4161fac32d4b7080bc0db";
  console.log(Path);
  return <Main></Main>;
}
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1280px;
`;
const Movie = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  margin-right: 70px;
  margin-bottom: 40px;
  border-radius: 15px;
`;
const Image = styled.img`
  display: flex;
  width: 250px;
  height: 350px;
  margin: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: none;
  background-color: rgb(140, 222, 219);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
