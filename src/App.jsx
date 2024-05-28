import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import MainPage from "./pages/MainPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComingPage from "./pages/UpcomingPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/now" element={<NowPlayingPage />} />
          <Route path="/top" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/movie/:title" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
