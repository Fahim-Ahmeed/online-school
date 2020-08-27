import React from 'react';
import'./Course.css';

const Course = (props) => {
    const{name,title,price,image}=props.sent;
    return (
        <div className="total-area">
            <div className="image-area">
            <img src={image} alt=""/>
            </div>
            <div className="info-area">
            <h4>{name}</h4>
             <p>{title}</p>
             <br/>
             <h2 style={{fontSize:'bold'}}>${price}</h2>
            </div>       
        </div>
    );
};

export default Course;