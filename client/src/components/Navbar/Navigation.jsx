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
    <div>
      <Link className='anchor' to="/">Home</Link>
      <Link className='anchor' to="#courses">Courses</Link>
      <Link className='anchor' to="/about">About</Link>
      <Link className='anchor' to="/contact">Contact</Link>
    </div>
  );
}

export default Navigation;
