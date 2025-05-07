import { Routes, Route, Link } from 'react-router-dom';
import {
  KeshoAngavuPageV5,
  KeshoAngavuPageV4,
  KeshoAngavuPageV3,
  KeshoAngavuPageV2,
  KeshoAngavuPageV1
} from './pages';


function App() {

  return (
    <div>
      <nav className="flex gap-4 mb-4">
        <Link to="/v4">V4</Link>
        <Link to="/v5">V5</Link>
      </nav>

      <Routes>
        <Route path="/v4" element={<KeshoAngavuPageV4 />} />
        <Route path="/v5" element={<KeshoAngavuPageV5 />} />
        <Route path="/" element={<KeshoAngavuPageV5 />} />
      </Routes>
    </div>
  )
}

export default App
