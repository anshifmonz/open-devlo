import NavBar from '../Navbar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import '../../styles/tutorial.css';

function Tutorial({ children }) {
  return (
    <>
      <NavBar />
      <div id='course-page'>
        <SideBar />
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
