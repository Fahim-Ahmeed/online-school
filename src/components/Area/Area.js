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
        <div className="area container">
            <div className="row">
            <div className="course-area col-7 col-sm-7 col-md-10 col-lg-10">
               {course.map(item =><Course sent={item} key={item.id} enroll={enrollControll}></Course>)}
             </div>
            <div className="cart-area col-2 col-sm-2 col-md-2 col-lg-2">
            <Cart cart={cart}></Cart>
            </div>
            </div>
            
        </div>
    );
};

export default Area;