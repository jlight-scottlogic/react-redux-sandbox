import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SandboxState } from '../redux/state';
import { selectUserHasPermission } from './redux/selectors/user-selectors';

type Props = Readonly<{
    path: string,
    component: React.ComponentType,
    permission: string,
    hasPermission: boolean
}>

class ProtectedRouteComponent extends React.Component<Props> {

    render() {
        if (this.props.hasPermission) {
            return <Route exact path={this.props.path} component={this.props.component}></Route>
        }

        return <Redirect to="/" />
    }

}

const mapStateToProps = (state: SandboxState, ownProps: Props) => ({
    ...ownProps,
    hasPermission: selectUserHasPermission(ownProps.permission)(state)
})

export default connect(mapStateToProps)(ProtectedRouteComponent);