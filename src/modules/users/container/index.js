import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getUsers, getUser} from "../redux/selectors";
import {UsersActionCreators} from "../redux/actions";

class Users extends Component{

    componentDidMount(){
        this.props.getUsersRequest(3)
        this.props.getUserByIdRequest(5)
    }

    render(){
        console.log("props: ", this.props)
        return(
            <div>Users list</div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    user: getUser(state),
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UsersActionCreators, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);