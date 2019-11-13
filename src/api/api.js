import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '935e885f-a427-45a0-be88-a4710c01760f'}
});
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data)
    },
};
export const followAPI = {
    followUsersApi(id) {
        return instance.post(`follow/${id}`, {}).then(res => res.data)
    },

    unFollowUserApi(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    }
}
export const authAPI = {
    getUser() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
    },
    logout(){
       return instance.delete(`auth/login`)
    }
};
export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/` + userId).then(res => res.data)
    }
}
