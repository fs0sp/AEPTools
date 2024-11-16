import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/Landingpage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Roadmap from './pages/Roadmap/Roadmap';
import Tools from './pages/Tools/Tools';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/tools' element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;







