import '../styles/app.css'
import '../styles/not-found.css';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div className="not-found">
      <h1>HTTP: <span>404</span></h1>
      <h2>Page Not Found</h2>
      <Link to={'/'} >HOME</Link>
    </div>
  );
}

export default NotFound;
