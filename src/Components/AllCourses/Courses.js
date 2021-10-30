import React from 'react';
import './Courses.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {
    const course = props.data;
    const handelAddToCart = props.handelAddToCart;
    return (
        <div className = "course-container">
            <div className="course-details">
                <h2>{course.title}</h2>
                <p>{course.intro}</p>
            </div>
            <div className="check-out">
                <img src={course.img} alt="" />
                <h3>${course.price}</h3>
                <button onClick = {()=>{handelAddToCart(course)}} className = "btn btn-warning btn-lg fw-bold">Add To Cart</button>
            </div>
        </div>
    );
};

export default Courses;