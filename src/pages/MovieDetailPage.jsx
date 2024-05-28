import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 790px;
`;
const Page = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 790px;
  background-color: rgba(118, 33, 170, 0.3);
`;
const Container = styled.div`
  display: flex;
  width: 800px;
`;
const Inform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin-left: 50px;
  height: 400px;
`;
const Poster = styled.img`
  width: 250px;
  height: 400px;
`;
const Story = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

function MovieDetailPage() {
  const location = useLocation();
  const data = location.state;

  console.log(data);

  function rate(r) {
    r = Math.floor(r);
    if (r == 10) {
      return "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 9) {
      return "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 8) {
      return "⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 7) {
      return "⭐️⭐️⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 6) {
      return "⭐️⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 5) {
      return "⭐️⭐️⭐️⭐️⭐️";
    } else if (r == 4) {
      return "⭐️⭐️⭐️⭐️";
    } else if (r == 3) {
      return "⭐️⭐️⭐️";
    } else if (r == 2) {
      return "⭐️⭐️";
    } else if (r == 1) {
      return "⭐️";
    } else if (r == 0) {
      return "";
    }
  }

  return (
    <Background>
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      ></Image>
      <Page>
        <Container>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          ></Poster>
          <Inform>
            <h3 style={{ color: "white" }}>{data.title}</h3>
            <p style={{ color: "white" }}>평점 {rate(data.vote_average)}</p>
            <p style={{ color: "white" }}>개봉일 {data.release_date}</p>
            <h5 style={{ color: "white" }}>줄거리</h5>
            <Story>{data.overview}</Story>
          </Inform>
        </Container>
      </Page>
    </Background>
  );
}

export default MovieDetailPage;
