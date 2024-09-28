import { Routes, Route } from 'react-router-dom';
import AppRoutes from '../Routes/Routes';
import { ThemeProvider } from '../hooks/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='*' element={<AppRoutes />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
