import React, { useState } from 'react';
import courses from '../../courses/courses';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Area.css';

const Area = () => {
const[course,setCourse]=useState(courses)
const[cart,setCart]=useState([]);


const enrollControll=(course)=>{
    const addedCourse=[...cart,course];
    setCart(addedCourse);
}
    return (
        <div className="area">
            <div className="course-area">
               {course.map(item =><Course sent={item} key={item.id} enroll={enrollControll}></Course>)}
             </div>
            <div className="cart-area">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Area;