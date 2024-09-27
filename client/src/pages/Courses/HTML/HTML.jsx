import { Outlet } from 'react-router-dom';

import '../../../styles/Courses/html/html.css';
import Tutorial from '../../../components/Tutorial';

function HTML() {
  return (
    <Tutorial>
      <Outlet />
    </Tutorial>
  )
}

export default HTML;
