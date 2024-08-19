import { Routes, Route } from 'react-router-dom';
import AppRoutes from '../Routes/Routes';

function App() {
  return (
    <Routes>
      <Route path='*' element={<AppRoutes />} />
    </Routes>
  );
}

export default App;