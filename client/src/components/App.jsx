import { Routes, Route } from 'react-router-dom';
import AppRoutes from '../Routes/Routes';
import { ThemeProvider } from '../hooks/ThemeContext';
import { SideBarProvider } from '../hooks/sideBarContext';

function App() {
  return (
    <ThemeProvider>
      <SideBarProvider>
        <Routes>
          <Route path='*' element={<AppRoutes />} />
        </Routes>
      </SideBarProvider>
    </ThemeProvider>
  );
}

export default App;
