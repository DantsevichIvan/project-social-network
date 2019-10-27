import {ADD_POST, GET_STATE, UPDATE_NEW_POST_TEXT} from "./Profile_Actoin";

const initState = {
    ProfilePage: {
        name: "Ivan",
        city: "Minsk",
        avatar: 'https://pp.userapi.com/c845420/v845420985/be0ee/jOcHTD-YR7g.jpg',
        about_me: 'Hi, I’m Ivan, I’m 22 and I like read book',
        tv_show: ["doctor house", "The Big Bang Theory", "national geographic"],
        favourite_music_bands: ['The Niebhoods', 'Сплин', 'Billie Eilish'],
        newPostText: "gfdgdfg",
        posts: [
            {
                id: 1,
                text_post: 'My first post',
                likes: "25",
                span_date: "22.10",
                comments: "10",
                divi: "12"
            },
            {
                id: 2,
                text_post: 'My second post',
                likes: "10",
                span_date: "21.10",
                comments: "7",
                divi: "5"
            }
        ],
        page_friend: [
            {avatar_friend: "https://pp.userapi.com/c845322/v845322845/1984b6/4Cqgddgr7xQ.jpg?ava=1", id: 1},
            {avatar_friend: "https://pp.userapi.com/c846216/v846216878/1f353c/tIha0TvaybA.jpg?ava=1", id: 2},
            {avatar_friend: "https://pp.userapi.com/c855224/v855224476/3bf1a/96fQZmzHigU.jpg?ava=1", id: 3},
            {
                avatar_friend: "https://sun2.dataix-by-minsk.userapi.com/c850016/v850016083/123dc2/AICtv13VUyo.jpg?ava=1",
                id: 4
            },
            {avatar_friend: "https://pp.userapi.com/c841332/v841332441/37a11/U9jVAse5cPI.jpg?ava=1", id: 5},
            {avatar_friend: "https://pp.userapi.com/c844721/v844721732/1fe9db/_pU7pEPaVng.jpg?ava=1", id: 6},
            {avatar_friend: "https://pp.userapi.com/c830708/v830708425/4d18e/s-JaMIq6LbU.jpg?ava=1", id: 7},
            {avatar_friend: "https://pp.userapi.com/c841332/v841332441/37a11/U9jVAse5cPI.jpg?ava=1", id: 8},
        ],
        profile_photos: [
            {img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', id: 1},
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclSaswB3QEg2HdWj0q72rQekxQ466sMRRIM9pNIV_m70NV9aCkg',
                id: 2
            },
            {img: 'https://pokemongolife.ru/p/Wartortle.png', id: 3},
            {img: 'http://pokemongowatch.ru/wp-content/uploads/2016/08/psyduck.jpg', id: 4},
            {img: 'http://cherepahi.info/images/6-mir/3-kino/pokemons2.jpg', id: 5},
            {img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', id: 6},
            {img: 'https://www.film.ru/sites/default/files/images/10(186).jpg', id: 7},

        ]
    }
};


const ProfileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_STATE : {
            return {
                ...state
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                text_post: state.ProfilePage.newPostText,
                likes: 0,
                span_date: "12.00",
                comments: 0,
                divi: 0
            };
            let stateCopy = {
                // ...state,
                ProfilePage : {
                    ...state.ProfilePage,
                    // ...state.ProfilePage.posts,
                    posts: [...state.ProfilePage.posts, newPost],
                    newPostText: ''
                },

            };
            return stateCopy


            // return Object.assign({},state, {
            //     posts: [...state.ProfilePage.posts, newPost]
            // })
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ProfilePage: {
                    ...state.ProfilePage,
                    newPostText: action.newText
                }
            }
        }
        default:
            return {
                ...state
            }
    }
};


export default ProfileReducer
