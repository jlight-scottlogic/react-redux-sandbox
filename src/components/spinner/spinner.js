import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default class SpinnerComponent extends React.Component {

    render() {
        if (!this.props.isLoading) {
            return null;
        }

        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

} 