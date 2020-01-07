import React from 'react';

export default (props) => (
    <>
        <div style={{ color: 'white' }}>{isNaN(props.count) ? 0 : props.count}</div>
        <img style={{ maxHeight: '40px' }} src={require('../../images/cart.png')} alt="cart"></img>
    </>
)