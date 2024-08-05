import '../../styles/home.css'
import Landing from './Landing';
import Course from './Course';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div id='home' className='scroll-bar'>
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