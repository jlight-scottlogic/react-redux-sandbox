import React from 'react';

export default (props) => (
    <>
        <div style={{ color: 'white' }}>{props.count}</div>
        <img style={{ maxHeight: '40px' }} src={require('../../images/cart.png')}></img>
    </>
)