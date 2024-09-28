import { Outlet } from 'react-router-dom';

import Tutorial from '../../../components/Tutorial';

function HTML() {
  return (
    <Tutorial>
      <Outlet />
    </Tutorial>
  )
}

export default HTML;
