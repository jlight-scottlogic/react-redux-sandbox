import React from 'react';
import { connect } from 'react-redux';
import { SandboxState } from '../redux/state';
import { selectUserIsLoggedIn } from './redux/selectors/user-selectors';
import { Button } from 'react-bootstrap';
import { userLoginAction, userLogoutAction } from './redux/actions/user-actions';

type Props = Readonly<{
    loggedIn: boolean,
    login: (a: any) => void,
    logout: (a: any) => void
}>

class ToggleLoginComponent extends React.Component<Props> {

    render() {
        if (this.props.loggedIn) {
            return <Button variant="light" onClick={this.props.logout}>Logout</Button>
        }

        return <Button variant="light" onClick={this.props.login}>Login</Button>
    }

}

const mapStateToProps = (state: SandboxState) => ({
    loggedIn: selectUserIsLoggedIn(state)
})

const mapDispatchToProps = {
    login: userLoginAction.create,
    logout: userLogoutAction.create
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLoginComponent);