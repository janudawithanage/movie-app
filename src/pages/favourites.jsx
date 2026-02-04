import '../css/Favorites.css';
import { useContext } from 'react';
import MovieCard from '../components/moviecard';
import MovieContext from '../contexts/moviecontext';

function Favourites() {
  const { favourites } = useContext(MovieContext);

  if (!favourites.length) {
    return <div className="favorites-empty">
      <h2>Your favourites list is empty</h2>
      <p>Add some items to your favourites to see them here.</p>
    </div>;
  }

  return (
    <div className="movies-grid">
      {favourites.map(movie => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  );
}

export default Favourites;