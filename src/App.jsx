import { Routes, Route } from 'react-router-dom';
import {
  KeshoAngavuPageV5,
  KeshoAngavuPageV4,
} from './pages';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/v4" element={<KeshoAngavuPageV4 />} />
        <Route path="/v5" element={<KeshoAngavuPageV5 />} />
        <Route path="/" element={<KeshoAngavuPageV5 />} />
      </Routes>
    </div>
  )
}

export default App
