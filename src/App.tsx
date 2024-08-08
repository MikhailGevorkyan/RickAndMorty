import './App.css';
import Characters from './pages/Characters';
import { Route, Routes } from 'react-router-dom';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import CharacterDetails from './pages/details/CharacterDetails';
import LocationDetails from './pages/details/LocationDetails';
import EpisodeDetails from './pages/details/EpisodeDetails';

function App() {
  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Routes>
        <Route path="*" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/episode/:id" element={<EpisodeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
