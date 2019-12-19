import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { hideAlert } from './redux/alert-action-creators';
import { selectAlertVisible, selectAlertStyle, selectAlertMessage } from './redux/alert-selectors';

class MiniAlertComponent extends React.Component {

    componentDidUpdate() {
        if (this.props.visible) {
            const fn = setInterval(() => {
                this.props.hideAlert();
                clearInterval(fn);
            }, 2000);
        }
    }

    render() {
        if (!this.props.visible) {
            return null;
        }

        return (
            <Container className="mini-alert-container">
                <Alert variant={this.props.style} className="text-center">
                    {this.props.message}
                </Alert>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    visible: selectAlertVisible(state),
    style: selectAlertStyle(state),
    message: selectAlertMessage(state)
})

const mapDispatchToProps = {
    hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniAlertComponent);