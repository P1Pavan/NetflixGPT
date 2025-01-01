import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Store/userSlice"
import moviesReducer from "./Store/moviesSlice"


const AppStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies: moviesReducer,
        },
    }
)

export default AppStore;