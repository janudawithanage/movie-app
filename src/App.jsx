import './css/App.css';
import Favourites from './pages/favourites';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/browse' element={<><Navbar /><main className="main-content"><Browse /></main></>} />
        <Route path='/favourites' element={<><Navbar /><main className="main-content"><Favourites /></main></>} />  
      </Routes>
    </div>
  );
}

export default App; 