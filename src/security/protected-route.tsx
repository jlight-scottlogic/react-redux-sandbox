import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SandboxState } from '../redux/state';
import { selectUserHasPermission } from './redux/selectors/user-selectors';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { showErrorAlert } from '../components/alert/redux/alert-action-creators';

type Props = Readonly<{
    path: string,
    component: React.ComponentType,
    permission: string,
    hasPermission: boolean,
    redirect: () => void
}>

class ProtectedRouteComponent extends React.Component<Props> {

    componentDidMount() {
        if (!this.props.hasPermission) {
            this.props.redirect();
        }
    }

    render() {
        if (this.props.hasPermission) {
            return <Route exact path={this.props.path} component={this.props.component}></Route>
        }

        return null;
    }

}

const mapStateToProps = (state: SandboxState, ownProps: Props) => ({
    ...ownProps,
    hasPermission: selectUserHasPermission(ownProps.permission)(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    redirect: () => { 
        dispatch(push('/'));
        showErrorAlert("You don't have permission to look at this")(dispatch);
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRouteComponent);