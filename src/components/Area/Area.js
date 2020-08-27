import React, { useState } from 'react';
import courses from '../../courses/courses';
import Course from '../Course/Course';
import './Area.css';

const Area = () => {
const[course,setCourse]=useState(courses)
    return (
        <div className="area">
            <div className="course-area">
               {course.map(item =><Course sent={item} key={item.id}></Course>)}
             </div>
            <div className="cart-area">
            <h2>this cart</h2>
            </div>
        </div>
    );
};

export default Area;