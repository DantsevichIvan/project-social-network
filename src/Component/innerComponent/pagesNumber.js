import s from "../Users/Users.module.css";
import React from "react";

const PagesNumbers = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((el) => {
                    return (
                        <span className={currentPage === el && s.selectedPage}
                              onClick={(e) => {
                                  onPageChanged(el)
                              }}>{el}</span>
                    )
                })}
        </div>
    )
}
export default PagesNumbers