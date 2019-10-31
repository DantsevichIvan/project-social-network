import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from '../../redux/UsersReducer';
import * as axios from 'axios';
import Users from "./Users";
import preloader from './../../img/loading-loader-svgrepo-com.svg'
import Preloader from "../innerComponent/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }
    render() {
        return <>
                {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged} users={this.props.users}/>

             </>

    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

export default connect(mapStateToProps, {setUsers, setCurrentPage, setTotalUsersCount ,toggleIsFetching} )(UsersContainer)