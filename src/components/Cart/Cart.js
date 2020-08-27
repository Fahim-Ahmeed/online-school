import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
console.log(cart)
let total=cart.reduce((total,prd)=>total+prd.price,0);
console.log(total);

    return (
        <div className="container">
           <h5>Enroll Description</h5>
           <hr/>
            <h6>Course Enrolled:{cart.length}</h6>
            <p>Total Course in amount:$ {total}</p>
            <button className="btn btn-info">Enroll History</button>
        </div>
    );
};

export default Cart;