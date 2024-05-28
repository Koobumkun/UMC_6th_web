import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 400px;
  margin-left: 95px;
  margin-top: 40px;
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
  width: 234px;
  height: 50px;
  margin: none;
  background-color: rgb(236, 249, 249);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 8px;
`;

function MovieContainer({ movieData }) {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.title}`, {
      state: {
        poster_path: movie.poster_path,
        title: movie.title,
        vote_average: movie.vote_average,
        overview: movie.overview,
        release_data: movie.release_data,
        backdrop_path: movie.backdrop_path,
      },
    });
  };

  return (
    <Container>
      {movieData.map((movie) => (
        <Card onClick={() => handleClick(movie)}>
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Title>
            <div>{movie.title}</div>
            <div>⭐️{movie.vote_average.toFixed(1)}</div>
          </Title>
        </Card>
      ))}
    </Container>
  );
}

export default MovieContainer;
