import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
console.log(cart)
let total=cart.reduce((total,prd)=>total+prd.price,0);
console.log(total);

    return (
        <div>
           <h2>Enroll Description</h2>
            <h4>Course Enrolled:{cart.length}</h4>
    <h5>Total Course in amount:$ {total}</h5>
        </div>
    );
};

export default Cart;