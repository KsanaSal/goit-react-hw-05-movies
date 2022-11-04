import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';

// import { MovieDetails } from 'pages/MovieDetails';

// const CreateAsyncComponent = path => lazy(() => import('../pages/Home'));
// console.log(CreateAsyncComponent())

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
