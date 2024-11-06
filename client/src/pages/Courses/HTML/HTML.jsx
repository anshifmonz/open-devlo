import { Outlet } from 'react-router-dom';

import Tutorial from '../../../pages/Courses/Tutorial';

function HTML() {
  return (
    <Tutorial>
      <Outlet />
    </Tutorial>
  )
}

export default HTML;
