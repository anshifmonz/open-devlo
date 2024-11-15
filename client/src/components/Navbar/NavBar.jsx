import { Link } from 'react-router-dom';

import '../../styles/nav.css';
import Navigations from './Navigation';
import { useTheme } from '../../hooks/ThemeContext';
import DropDown from './DropDown';
import { useNavBar } from '../../hooks/navBarContext';

function NavBar() {

  const { theme, setTheme } = useTheme();
  const { isOpen, setIsOpen } = useNavBar();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav>
      <div>
        <Link to='/'>Open Devlo</Link>
        <div className="right">
          <div className="navigation">
            <Navigations />
          </div>
          <div className="icons">
            <img src='/assets/nav/dark.png' alt="Theme" onClick={toggleTheme} style={{ display: theme === 'dark' ? 'block' : 'none' }} />
            <img src='/assets/nav/light.png' alt="Theme" onClick={toggleTheme} style={{ display: theme === 'dark' ? 'none' : 'block' }} />
            <a href="/user">
              <img src='/assets/nav/userLight.png' alt="User icon" width={30} height={30} style={{ display: theme === 'dark' ? 'block' : 'none' }} />
              <img src='/assets/nav/userDark.png' alt="User icon" width={30} height={30} style={{ display: theme === 'dark' ? 'none' : 'block' }} />
            </a>
            {
              isOpen
              ? <DropDown />
              : <div className="menu" onClick={() => setIsOpen(!isOpen)}>
                  <svg width="30" height="30" viewBox="0 0 48 49" fill="none"><path d="M32.38 4.5H15.62C8.34 4.5 4 8.84 4 16.12V32.86C4 40.16 8.34 44.5 15.62 44.5H32.36C39.64 44.5 43.98 40.16 43.98 32.88V16.12C44 8.84 39.66 4.5 32.38 4.5Z" fill={theme === 'dark' ? '000000' : '#f0f7ff'}/><path d="M34 35H14C13.18 35 12.5 34.32 12.5 33.5C12.5 32.68 13.18 32 14 32H34C34.82 32 35.5 32.68 35.5 33.5C35.5 34.32 34.82 35 34 35Z" fill={theme === 'dark' ? 'white' : 'black'}/><path d="M34 26H14C13.18 26 12.5 25.32 12.5 24.5C12.5 23.68 13.18 23 14 23H34C34.82 23 35.5 23.68 35.5 24.5C35.5 25.32 34.82 26 34 26Z" fill={theme === 'dark' ? 'white' : 'black'}/><path d="M34 17H14C13.18 17 12.5 16.32 12.5 15.5C12.5 14.68 13.18 14 14 14H34C34.82 14 35.5 14.68 35.5 15.5C35.5 16.32 34.82 17 34 17Z" fill={theme === 'dark' ? 'white' : 'black'} /></svg>
                </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;