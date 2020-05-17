import React from 'react'
import Paginator from "../innerComponent/Paginator";
import User from "./User";


const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow}) => {
    return(
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                          onPageChanged={onPageChanged}/>
            {
                users.map(u => <div key={u.id}>
                    <User follow={follow} followingInProgress={followingInProgress} item={u} unfollow={unfollow}/>
                    </div>
                )
            }
        </div>
    )
};
export default Users