import '../css/moviecard.css';

function MovieCard({movie}) {

    function onPlayClick() {
        alert
    }

    return (
  
  <div className="movie-card">
  
        <div className="movie-poster">
            <img src={movie.poster} alt={`${movie.title} Poster`} />
  
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onPlayClick}>Play</button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
        </div>
  
    </div>
  );
}

export default MovieCard;