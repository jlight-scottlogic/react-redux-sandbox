import React from 'react';

export default (props) => (
    <div className="basket-icon-container" onClick={props.onIconClicked}>
        <div className="d-inline-block" style={{ color: 'white' }}>{isNaN(props.count) ? 0 : props.count}</div>
        <img style={{ maxHeight: '40px' }} src={require('../../images/cart.png')} alt="cart"></img>
    </div>
)