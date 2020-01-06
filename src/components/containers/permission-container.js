import React from 'react';
import { connect } from "react-redux"
import { selectUserHasPermission } from "../../security/redux/selectors/user-selectors"

const component = (props) => {
    if (props.hasPermission) {
        return (<>{ props.children }</>)
    }

    return null
}

const mapStateToProps = (state, ownProps) => ({
    hasPermission: selectUserHasPermission(ownProps.permission)(state),
    permission: ownProps.permission
})

export default connect(mapStateToProps, null)(component);