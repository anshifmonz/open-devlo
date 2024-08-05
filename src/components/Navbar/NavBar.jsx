import { useState, useEffect } from 'react';
import '../../styles/nav.css';
import Navigations from './Navigation';

function NavBar() {

    const [theme, setTheme] = useState('dark');
    const [borderStyle, setBorderStyle] = useState('1.5px solid rgba(255, 255, 255, 0.1)');

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      theme == 'dark' ? setBorderStyle('1.5px solid rgba(255, 255, 255, 0.1)') : setBorderStyle('1.5px solid rgba(0, 0, 0, 0.1)')
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
        <nav style={{borderBottom: borderStyle}}>
            <a href='/'>Open Devlo</a>
            <input type="text" name='searcg=h-box' placeholder='Search our courses'/>
            <div className="navigation">
                <Navigations />
                <div className="icons">
                    <img src={`assets/nav/${theme === 'dark' ? 'dark' : 'light'}.png`} alt="Theme" onClick={toggleTheme}/>
                    <a href="/user">
                        <img src={theme == 'dark' ? "assets/nav/userLight.png" : "assets/nav/userDark.png"} alt="User icon" width={30} height={30}/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default  NavBar;