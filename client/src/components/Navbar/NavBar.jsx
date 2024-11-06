import { Link } from 'react-router-dom';

import '../../styles/nav.css';
import Navigations from './Navigation';
import { useTheme } from '../../hooks/ThemeContext';

function NavBar() {

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav>
      <Link to='/'>Open Devlo</Link>
      <div className="right">
        <div className="navigation">
          <Navigations />
        </div>
        <div className="icons">
          <img src={`/assets/nav/${theme === 'dark' ? 'dark' : 'light'}.png`} alt="Theme" onClick={toggleTheme} />
          <a href="/user">
            <img src={theme == 'dark' ? "/assets/nav/userLight.png" : "/assets/nav/userDark.png"} alt="User icon" width={30} height={30} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;