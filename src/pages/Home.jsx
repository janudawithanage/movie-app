import Moviecard from '../components/moviecard';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("latest"); // 'latest' or 'popular'

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const popularMovies = await getPopularMovies();
                let result = [...popularMovies];
                if (filter === "latest") {
                    result.sort((a, b) => {
                        if (!a.release_date) return 1;
                        if (!b.release_date) return -1;
                        return new Date(b.release_date) - new Date(a.release_date);
                    });
                } // else keep as popular
                setMovies(result);
            } catch (err) {
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };
        if (!searchQuery.trim()) {
            loadMovies();
        }
    }, [filter, searchQuery]);


    // Search as user types
    useEffect(() => {
        const fetchSearch = async () => {
            if (!searchQuery.trim()) return;
            setLoading(true);
            setError(null);
            try {
                const results = await searchMovies(searchQuery);
                setMovies(results);
            } catch (err) {
                setError("Failed to search movies...");
            } finally {
                setLoading(false);
            }
        };
        fetchSearch();
    }, [searchQuery]);

    // Remove form submit handler (search is now live)
    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type="text"
                    placeholder="Search movies..."
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>

            {/* Filter Buttons */}
            {!searchQuery.trim() && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button
                        onClick={() => setFilter('latest')}
                        style={{
                            padding: '0.5rem 1.5rem',
                            background: filter === 'latest' ? '#e50914' : '#222',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                    >
                        Latest
                    </button>
                    <button
                        onClick={() => setFilter('popular')}
                        style={{
                            padding: '0.5rem 1.5rem',
                            background: filter === 'popular' ? '#e50914' : '#222',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                    >
                        Popular
                    </button>
                </div>
            )}

            {loading && <div style={{ textAlign: 'center', margin: '2rem' }}>Loading...</div>}
            {error && <div style={{ color: 'red', textAlign: 'center', margin: '2rem' }}>{error}</div>}

            {!loading && !error && movies.length === 0 && (
                <div style={{ textAlign: 'center', margin: '2rem', color: '#888' }}>No movies found.</div>
            )}

            <div className="movies-grid">
                {movies.map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;