import React from 'react'
import s from "./Users.module.css";
import userFototos from "../../img/pngtree-users-vector-icon-png-image_3725294.jpg";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map((el) => {
                        return (
                            <span className={props.currentPage === el && s.selectedPage}
                                  onClick={(e) => {
                                      props.onPageChanged(el)
                                  }}>{el}</span>
                        )})}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                         <img src={u.photos.small != null ? u.photos.small : userFototos} className={s.userPhoto}
                              alt=""/>
                    </div>
                    <div><button>Follow</button></div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users