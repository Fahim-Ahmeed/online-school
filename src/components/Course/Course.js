import React from 'react';
import'./Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnlock} from '@fortawesome/free-solid-svg-icons'

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
             <button className="enroll-button"
                onClick={()=>props.enroll(props.sent)}             
             >
                 <FontAwesomeIcon icon={faUnlock} /> Enroll Now
                 </button>
            </div>       
        </div>
    );
};

export default Course;