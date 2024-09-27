import { Outlet } from "react-router-dom";

import Tutorial from "../../../components/Tutorial";

function CSS() {
  return (
    <Tutorial>
      <Outlet />
    </Tutorial>
  )
}

export default CSS;
