import React from 'react';
import './Courses.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {
    console.log(props.data);
    const course = props.data;
    return (
        <div className = "course-container">
            <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.intro}</p>
            </div>
            <div className="check-out">
                <img src={course.img} alt="" />
                <button className = "btn btn-warning btn-lg fw-bold m-5">Add To Cart</button>
            </div>
        </div>
    );
};

export default Courses;