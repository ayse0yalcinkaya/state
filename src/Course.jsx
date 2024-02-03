import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import CompleteWeb from './images/completeweb.jpg';
import Csharp from './images/csharp.png';

import './Course.css';


const courseMap = {
    Angular,
    Bootstrap,
    CompleteWeb,
    Csharp
}

function Course({ courseName }) {
    // console.log(Angular);
    // console.log(courseName);
    console.log(courseMap[courseName]);
    return (
        <div className="courseDiv">
            <img className="courseImg" src={courseMap[courseName]} alt="course" />
        </div>
    );
}

export default Course;