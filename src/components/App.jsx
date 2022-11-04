import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';

// import { MovieDetails } from 'pages/MovieDetails';

const CreateAsyncComponent = path => lazy(() => import('../pages/Home'));
console.log(CreateAsyncComponent())

// const Home = createAsyncComponent('../pages/Home');
// const Movies = createAsyncComponent('../pages/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails');

export const App = () => {
  return (
    // <Container>
    //   <Header>
    //     <nav>
    //       <Link to="/" end>
    //         Home
    //       </Link>
    //       <Link to="/movies">Movies</Link>
    //     </nav>
    //   </Header>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<CreateAsyncComponent />} />
        {/* <Route path="movies" element={<Movies />} /> */}
        {/* <Route path="movies/:id" element={<MovieDetails />} /> */}
      </Route>
    </Routes>
    // </Container>
  );
};
