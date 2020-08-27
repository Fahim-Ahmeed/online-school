import React from 'react';
import'./Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock} from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const{name,title,price,image}=props.sent;
    return (
        <div className="total-area container">
            <div className="row">
            <div className="image-area col-12 col-sm-12 col-md-4 col-lg-4">
            <img src={image} alt=""/>
            </div>
            <div className="info-area col-12 col-sm-12 col-md-8 col-lg-8">
            <h4>{name}</h4>
             <p>{title}</p>
             <h2 style={{fontSize:'bold'}}> <span style={{fontWeight:'bold',textColor:'green'}}>${price}</span></h2>
             <button className="enroll-button btn btn-success"
                onClick={()=>props.enroll(props.sent)}             
             >
                 <FontAwesomeIcon icon={faUnlock} /> Enroll Now
                 </button>
            </div>       

            </div>
           
        </div>
    );
};

export default Course;