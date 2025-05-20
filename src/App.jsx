import { Routes, Route } from 'react-router-dom';
import {
  KeshoAngavuPageV5,
} from './pages';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<KeshoAngavuPageV5 />} />
      </Routes>
    </div>
  )
}

export default App
