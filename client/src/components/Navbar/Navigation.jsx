import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Navigation() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Link className='anchor' to="/">Home</Link>
      <Link className='anchor' to="/tutorial">Tutorials</Link>
      <Link className='anchor' to="/play-ground">Play Ground</Link>
    </>
  );
}

export default Navigation;
