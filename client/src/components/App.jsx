import { Routes, Route } from 'react-router-dom';
import AppRoutes from '../Routes/Routes';
import { ThemeProvider } from '../hooks/ThemeContext';
import { SideBarProvider } from '../hooks/sideBarContext';
import { NavBarProvider } from '../hooks/navBarContext';

function App() {
  return (
    <ThemeProvider>
      <NavBarProvider>
        <SideBarProvider>
          <Routes>
            <Route path='*' element={<AppRoutes />} />
          </Routes>
        </SideBarProvider>
      </NavBarProvider>
    </ThemeProvider>
  );
}

export default App;
