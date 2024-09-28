import { useLocation } from 'react-router-dom';

import NavBar from './Navbar/NavBar';
import SideBar from './SideBar/SideBar';
import Footer from './Footer/Footer';

import '../styles/tutorial.css';
import '../styles/Courses/code.css'

function Tutorial({ children }) {

  const location = useLocation();
  const currentCourse = location.pathname.split('/')[2];
  
  return (
    <>
      <NavBar />
      <div id='course-page'>
        <SideBar tutorial={currentCourse} />
        <main id='main'>
          <section className='tutorial'>
            {children}
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Tutorial;
