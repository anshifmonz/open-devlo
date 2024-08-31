import { Link } from 'react-router-dom';

import '../../styles/course.css'
import Data from '../../data/course.json';

function Course() {
  return (
    <div className="card-container">
      {Data.map(course => (
        <div className="course-card" key={course.id}>
          <img src={course.img} alt={course.alt} />
          <div className="course-details">
            <h1>{course.title}</h1>
            <p>{course.desc}</p>
            <Link to={course.path}>Start Now</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Course;
