import '../../styles/home.css'
import Landing from './Landing';
import Course from './Course';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

function Home() {
  return (
    <div id='home' className='scroll-bar'>
      <NavBar />
      <Landing />
      <section id='courses' className='course'>
        <h1>Our Courses</h1>
        <Course />
      </section>
      <Footer />
    </div>
  )
}

export default Home;