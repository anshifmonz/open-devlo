import Content from "./Content";
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";

function CoursePage() {
  return (
    <>
      <NavBar />
      <div id='course-page'>
          <SideBar />
          <Content />
      </div>
    </>
  )
}

export default CoursePage;
